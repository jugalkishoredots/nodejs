module.exports = {
    index: (req, res) => {
       // res.render("users/index", {data: "Dynamic Data"});
       res.render("web/index", {data: "Dynamic Data",  layout: './layouts/sidebar'});
    },
    login: (req, res) => {
       // res.render("users/index", {data: "Dynamic Data"});
      //  res.render("web/login", {data: "Dynamic Data"});
       res.render("admin/admin/login", { layout: "./layouts/admin/login_layout" });
    },
    loginPost: (req, res) => {
      console.log(req.body)
       // res.render("users/index", {data: "Dynamic Data"});
       res.redirect("/admin/dashboard");
    //    res.render("web/index", {data: "Dynamic Data"});
    },
    register: (req, res) => {
       // res.render("users/index", {data: "Dynamic Data"});
       res.render("web/register", {data: "Dynamic Data"});
    },
    registerPost: (req, res) => {
       // res.render("users/index", {data: "Dynamic Data"});
       res.render("web/index", {data: "Dynamic Data"});
    },
    dashboard: (req, res) => {
       // res.render("users/index", {data: "Dynamic Data"});
       res.render("admin/dashboard/AdminDashboard", { layout: './layouts/admin/admin_layout', data: "Dynamic Data"});
    },
    myProfile: (req, res) => {
       // res.render("users/index", {data: "Dynamic Data"});
       res.render("admin/admin/edit_profile", { layout: './layouts/admin/admin_layout', data: "Dynamic Data"});
    },
    settings: (req, res) => {
       // res.render("users/index", {data: "Dynamic Data"});
       res.render("admin/admin/setting", { layout: './layouts/admin/admin_layout', data: "Dynamic Data"});
    },
    logout: (req, res) => {
       // res.render("users/index", {data: "Dynamic Data"});
       res.redirect("/admin");
      //  res.render("admin/login/login", { layout: './layouts/admin/admin_layout', data: "Dynamic Data"});
    }
}