let nodemailer = require("nodemailer");

export default async (req, res) => {
  require("dotenv").config();
  


  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: req.body.email,
    to: 'pecullozie@gmail.com',
    subject: `Message From ${req.body.name} ${req.body.email}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div>`,
  };

//   transporter.sendMail(mailData, function (err, info) {
//     if (err) console.log(err);
//     else console.log(info);
//   });
//   return res.status(200).json({ error: "" });
 try {
    await transporter.sendMail(mailData);
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};
