import { API_ENDPOINTS } from './config';

export async function sendEmail(): Promise<string> {
  const response = await fetch(API_ENDPOINTS.email, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: 'baltasar.solanilla@gmail.com',
      subject: 'Hello!',
      message: 'This is a test email from Next.js via SES.',
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to send email: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
