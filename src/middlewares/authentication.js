// exports.authenticationMiddleware = function (req, res, next) {
//   // console.log(req.session.admin);
//   if (req.session.admin) {
//     return next();
//   } else {
//     req.flash("error", "Not authorized!");
//     res.redirect("/admin-login");
//   }
// };
module.exports = {
  adminAuth: (req, res, next) => {
    // console.log(req.session.admin);
    // if (req.session.admin) {
    //   return next();
    // } else {
    //   req.flash("error", "Not authorized!");
    //   res.redirect("/admin22");
    // }
    return next();
  },
  Weblogin: (req, res, next) => {
    // res.render("users/index", {data: "Dynamic Data"});
    res.render("web/login", { data: "Dynamic Data" });
  },
};
