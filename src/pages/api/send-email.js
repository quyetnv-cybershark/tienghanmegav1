/* eslint-disable max-statements */
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, contractDetails = '123456456456' } = req.body;
    console.log('Received data:', { name, email, contractDetails });
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS);
    // Cấu hình Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Sử dụng dịch vụ email của bạn, ví dụ: Gmail
      auth: {
        user: process.env.EMAIL_USER, // email của bạn
        pass: process.env.EMAIL_PASS, // mật khẩu ứng dụng của bạn
      },
    });

    // Nội dung email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'hanhnh2714@gmail.com', // email người nhận
      subject: 'New Contract Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nContract Details: ${contractDetails}`,
    };

    // Gửi email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
