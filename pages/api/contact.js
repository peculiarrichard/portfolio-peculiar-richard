let nodemailer = require("nodemailer");

export default function handler(req, res) {
  require("dotenv").config();
  const PASSWORD = process.env.password;


  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.email,
      pass: PASSWORD,
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

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  return res.status(200).json({ error: "" });
};
