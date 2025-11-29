import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Telemetry = () => {
  useEffect(() => {
    const hasSentNotification = sessionStorage.getItem('visitNotificationSent');

    if (!hasSentNotification) {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        // Fetch IP address from an external service
        fetch('https://api.ipify.org?format=json')
          .then(response => response.json())
          .then(data => {
            const templateParams = {
              visit_time: new Date().toLocaleString(),
              user_agent: navigator.userAgent,
              referrer: document.referrer || 'Direct visit',
              ip_address: data.ip,
              language: navigator.language,
              screen_resolution: `${window.screen.width}x${window.screen.height}`,
              os: navigator.platform,
            };

            return emailjs.send(serviceId, templateId, templateParams, publicKey);
          })
          .then((response) => {
            console.log('Visit notification sent successfully!', response.status, response.text);
            sessionStorage.setItem('visitNotificationSent', 'true');
          })
          .catch((err) => {
            console.error('Failed to send visit notification.', err);
          });
      } else {
        console.warn('EmailJS credentials are not configured. Skipping visit notification.');
      }
    }
  }, []);

  return null; // This component does not render anything
};

export default Telemetry;