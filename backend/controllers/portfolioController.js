const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

// //transport
// const transporter = nodemailer.createTransport(
//   sendGridTransport({
//     auth: {
//       api_key: process.env.API_SENDGRID,
//     },
//   })
// );
let transporter = nodemailer.createTransport({
  service: "gmail",
  port: 578,
  secure: false, // Set to true if using SSL/TLS
  auth: {
    user: "ak5518125@gmail.com",
    pass: "ryqf slat peuf ypmi",
  },
});

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    //validation
    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    //email matter
    let mailOptions = {
      from: email,
      to: "ak5518125@gmail.com", // Sender address
      // List of recipients
      subject: "Regarding Mern Portfolio App", // Subject line
      // Plain text body
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
      `, // HTML body
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });

    return res.status(200).send({
      success: true,
      message: "Your Message Send Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
