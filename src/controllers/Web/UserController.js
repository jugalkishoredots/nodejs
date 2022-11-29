const bcrypt = require("bcrypt-nodejs");
const db = require("../../../models");
const nodemailer = require("nodemailer");
module.exports = {
  index: (req, res) => {
    // res.render("users/index", {data: "Dynamic Data"});
    res.render("web/index", { data: "Dynamic Data" });
  },
  login: (req, res) => {
    // res.render("users/index", {data: "Dynamic Data"});
    res.render("web/login", {
      data: "Dynamic Data",
      message: req.flash("error"),
      success: req.flash("success"),
    });
  },
  loginPost: (req, res) => {
    // res.render("users/index", {data: "Dynamic Data"});
    res.render("web/index", { data: "Dynamic Data" });
  },
  register: (req, res) => {
    // res.render("users/index", {data: "Dynamic Data"});
    res.render("web/register", {
      title: ":: Register ::",
      data: [],
      message: req.flash("error"),
      success: req.flash("success"),
      layout: "./layouts/web/web_layout",
    });
    //  res.render("web/register", {data: "Dynamic Data"});
  },
  registerPost: async (req, res) => {
    await db.User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((userDetails) => {
        if (userDetails == null) {
          db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
          }).then((faq_data) => {
            req.flash("success", "Registration successfully!");
            res.redirect("/login");
          });
        } else {
          req.flash("error", "Email address already exists !!!");
          res.redirect("/register");
        }
      })
      .catch((error) => {
        console.log("mihisanisna 2");
        console.error("Failed to retrieve admin detail : ", error);
      });
  },
  forgotPassword: (req, res) => {
    // res.render("users/index", {data: "Dynamic Data"});
    res.render("web/forgot_password", {
      data: "Dynamic Data",
      message: req.flash("error"),
      success: req.flash("success"),
    });
  },
  forgotPasswordMail: async (req, res) => {
    console.log(req.body);
    // let testAccount = await nodemailer.createTestAccount();
    // // create reusable transporter object using the default SMTP transport
    // let transporter = nodemailer.createTransport({
    //   host: "smtp.ethereal.email",
    //   port: 587,
    //   secure: false, // true for 465, false for other ports
    //   auth: {
    //     user: testAccount.user, // generated ethereal user
    //     pass: testAccount.pass, // generated ethereal password
    //   },
    // });
    // // send mail with defined transport object
    // let info = await transporter.sendMail({
    //   from: '"Fred Foo 👻" <foo@example.com>', // sender address
    //   to: "jugalds@yopmail.com", // list of receivers
    //   subject: "Hello ✔", // Subject line
    //   text: "Hello world?", // plain text body
    //   html: "<b>Hello world?</b>", // html body
    // });

    let testAccount = await nodemailer.createTransport({
      host: "mail.24livehost.com",
      port: 25,
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: "ds27@24livehost.com",
        pass: "LFo3h1r5zxdjpq",
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    // send mail with defined transport object
    let info = testAccount.sendMail({
      from: '"Dots" <ds27@24livehost.com>', // sender address
      to: "jugalds@yopmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      // html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", testAccount);
    req.flash("success", "Forgot Password Email sent on your mail ID !");
            res.redirect("/login");
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  },
};
