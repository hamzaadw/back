const nodemailer = require('nodemailer');
const router = require('express').Router(); 

router.post('/register', async (req, res) => {
  const { recipientEmail, subject, message,message2 } = req.body;

  console.log('EMAIL: hamzaasadabcd@gmail.com');
  console.log('PASSWORD: rqws wlbe txgd iiec');
  

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "hamzaasadabcd@gmail.com" , // Your Gmail address
        pass: "rqws wlbe txgd iiec" 
    },
  });

  const mailOptions = {
    from: "hamzaasadabcd@gmail.com",
    to: recipientEmail,
    subject: subject,
    text: message,
  };

  const mailOptionsToSender = {
    from: "hamzaasadabcd@gmail.com",
    to: "hamzaasadabcd@gmail.com",
    subject: "Order Received",
    text: `${message2}`,
  };

  try {
    // Send the email to the recipient
    await transporter.sendMail(mailOptions);

    // Send the confirmation email to the sender
    await transporter.sendMail(mailOptionsToSender);

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', error });
  }
});

module.exports = router;
