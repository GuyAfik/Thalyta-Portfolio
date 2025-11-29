import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Telemetry = () => {
  useEffect(() => {
    // Check if a notification has already been sent this session
    const hasSentNotification = sessionStorage.getItem('visitNotificationSent');

    if (!hasSentNotification) {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Ensure all required environment variables are set
      if (serviceId && templateId && publicKey) {
        const templateParams = {
          visit_time: new Date().toLocaleString(),
          user_agent: navigator.userAgent,
          referrer: document.referrer || 'Direct visit',
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
          .then((response) => {
            console.log('Visit notification sent successfully!', response.status, response.text);
            // Set a flag in session storage to prevent re-sending
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