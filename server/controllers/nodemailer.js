const nodemailer = require("nodemailer");

// Nodemailer
const transport = {
  service: 'Gmail',
  auth: {
    type: 'Oauth2',
    user: process.env.EMAIL_USER,
    refreshToken: process.env.EMAIL_REFRESH_TOKEN,
    clientId: process.env.EMAIL_CLIENT_ID,
    clientSecret: process.env.EMAIL_CLIENT_SECRET,
  }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

exports.nodemailer = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const content = `
  <table style="width:100%">
    <tr>
      <th style="text-align:right;width:150px;">Customer name:</th>
      <td>${name}</td>
    </tr>
    <tr>
      <th style="text-align:right;width:150px;">E-mail:</th>
      <td>${email}</td>
    </tr>
    <tr>
      <th style="text-align:right;width:150px;">Message:</th>
      <td>${message}</td>
    </tr>
  </table>`;

  const mail = {
    from: name,
    to: process.env.EMAIL_USER, //Change to email address that you want to receive messages on
    subject: `New message from ${name}`,
    html: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
};
