const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());

app.post('/api/sendEmail', async (req, res) => {
  const { name, email, message } = req.body;

  // Create a nodemailer transporter for sending emails
  const transporter = nodemailer.createTransport({
    Gmail
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: 'loganhumeniuk@gmail.com',
      to: 'thssrobotics@gmail.com',
      subject: 'Sponsor Inquiry',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).send('Failed to send email');
  }
});

// Start the server
app.listen(3001, () => {
  console.log('Server running on port 3001');
});
