const bcrypt = require("bcrypt-nodejs");
const db = require("../../../models");
module.exports = {
    index: (req, res) => {
       // res.render("users/index", {data: "Dynamic Data"});
       res.render("web/index", {data: "Dynamic Data"});
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
       res.render("web/index", {data: "Dynamic Data"});
    },
    register: (req, res) => {
       // res.render("users/index", {data: "Dynamic Data"});
       res.render("web/register", {
         title: ":: Login ::",
         data: [],
         message: req.flash("error"),
         success: req.flash("success"),
         layout: "./layouts/web/web_layout",
       });
      //  res.render("web/register", {data: "Dynamic Data"});
    },
    registerPost: async (req, res) => {
      await db.User.create({
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         email: req.body.email,
         password : bcrypt.hashSync(req.body.password),
      })
        .then((faq_data) => {
          req.flash("success", "Registration successfully!");
          res.redirect("/login");
        })
        .catch((error) => {
          console.error("Failed to retrieve Faq detail : ", error);
        });
    },
}