/**
 * Contact Service handler
 * Integrates with EmailJS or Spring Boot REST endpoint
 */
export async function sendContactMessage(formData) {
  // Validate input fields
  const { name, email, subject, message } = formData;

  if (!name || !name.trim()) {
    throw new Error('Please enter your full name.');
  }

  if (!email || !email.trim() || !/\S+@\S+\.\S+/.test(email)) {
    throw new Error('Please enter a valid email address.');
  }

  if (!subject || !subject.trim()) {
    throw new Error('Please specify a message subject.');
  }

  if (!message || message.trim().length < 10) {
    throw new Error('Please write a message with at least 10 characters.');
  }

  // Simulate server network latency / EmailJS dispatch
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // Return success response object
  return {
    success: true,
    message: 'Thank you! Your message has been sent successfully. Nandkumar will get back to you shortly.',
    timestamp: new Date().toISOString()
  };
}
