/**
 * Generates the HTML email body for password reset.
 * @param {string} url - The full reset link (e.g., https://myapp.com/reset/token123)
 * @returns {string} - The formatted HTML string
 */
const getPasswordResetTemplate = (url) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
      <h2 style="color: #333333; text-align: center;">Password Reset Request</h2>
      <p style="color: #555555; font-size: 16px;">
        Hello,
      </p>
      <p style="color: #555555; font-size: 16px;">
        We received a request to reset your password. If you didn't make this request, you can safely ignore this email.
      </p>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="${url}" style="background-color: #007BFF; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px; display: inline-block;">
          Reset Your Password
        </a>
      </div>
      
      <p style="color: #999999; font-size: 14px; text-align: center;">
        This link will expire in 15 minutes.
      </p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
      <p style="color: #aaaaaa; font-size: 12px; text-align: center;">
        If the button above doesn't work, copy and paste this link into your browser:<br>
        <a href="${url}" style="color: #007BFF;">${url}</a>
      </p>
    </div>
  `;
};

export {getPasswordResetTemplate}