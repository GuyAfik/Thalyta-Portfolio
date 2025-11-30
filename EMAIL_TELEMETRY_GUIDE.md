# How to Receive Telemetry Emails with EmailJS

To receive an email every time a visitor accesses your website, you need to follow these steps to set up and configure your EmailJS account.

## 1. Create an EmailJS Account

If you don't have an account already, go to [emailjs.com](https://www.emailjs.com) and sign up for a free account.

## 2. Add Your Email Service

- From your EmailJS dashboard, go to the **Email Services** section.
- Click **Add New Service**.
- Select **Gmail** from the list.
- Follow the on-screen instructions to connect your Gmail account. After connecting, EmailJS will assign a **Service ID** to this service. Keep this ID handy.

## 3. Create an Email Template

This template defines the content of the email you will receive.

- Go to the **Email Templates** section in your dashboard.
- Click **Create New Template**.
- The template will be assigned a **Template ID**. You will need this later.
- In the template editor, set the **Subject** to something like `New Website Visit: {{ip_address}}`.
- In the **Content** body, you can use variables to include the visitor's information. These variables correspond to the data being sent from the website.

Here is a sample template you can use. Copy and paste this into the content body:

```html
<h3>A new visitor has accessed your portfolio!</h3>
<p>Here are the details:</p>
<ul>
  <li><strong>Time of Visit:</strong> {{visit_time}}</li>
  <li><strong>IP Address:</strong> {{ip_address}}</li>
  <li><strong>Operating System:</strong> {{os}}</li>
  <li><strong>Browser:</strong> {{user_agent}}</li>
  <li><strong>Language:</strong> {{language}}</li>
  <li><strong>Screen Resolution:</strong> {{screen_resolution}}</li>
  <li><strong>Referrer:</strong> {{referrer}}</li>
</ul>
```

- Save the template.

## 4. Configure Environment Variables

You need to add your EmailJS credentials to your project so the code can use them.

- In your project, find or create a file named `.env.local` in the root directory.
- Open the `.env.local` file and add the following lines, replacing the placeholder values with your actual credentials from EmailJS:

```
VITE_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
```

- You can find your **Service ID** and **Template ID** in the sections you just configured.
- Your **Public Key** can be found in the **Account** section of your EmailJS dashboard.

## 5. Restart Your Application

After updating the `.env.local` file, you need to restart your development server for the changes to take effect.

Now, every time a new visitor accesses your website, you should receive a detailed email in your Gmail inbox.