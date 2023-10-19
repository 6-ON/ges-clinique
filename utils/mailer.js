// const Admin = require("../models/admin");
import { createTransport } from "nodemailer";
import "dotenv/config";

export const sendEmail = (req, res) => {
	const transporter = createTransport({
		service: "gmail",
		auth: {
			user: process.env.APP_EMAIL_ADDRESS,
			pass: process.env.APP_EMAIL_PASSWORD,
		},
	});

	const htmlContent = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            
          }
          .container {
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          #test{
            color:black;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1 id="test">Hello there!</h1>
          <p id="test">This is a drbhjkgi furdygh jhgyftdry guhjbknbhg ftyughjknh ygthjnhyugt est .</p>
        </div>
      </body>
    </html>
  `;

	const mailOptions = {
		from: process.env.APP_EMAIL_ADDRESS,
		to: "rammachsedik@gmail.com",
		subject: "Test Email",
		replyTo: "rammachsedik@gmail.com",
		html: htmlContent,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			res.status(500).send("Error sending email: " + error);
		} else {
			res.send("Email sent: " + info.response);
		}
	});
};
