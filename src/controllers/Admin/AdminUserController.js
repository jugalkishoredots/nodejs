const bcrypt = require('bcrypt-nodejs');
const db = require('../../../models');


module.exports = {
  index: (req, res) => {
    // res.render("users/index", {data: "Dynamic Data"});
    res.render("web/index", {
      data: "Dynamic Data",
      layout: "./layouts/sidebar",
    });
  },
  login: (req, res) => {
    // res.render("users/index", {data: "Dynamic Data"});
    //  res.render("web/login", {data: "Dynamic Data"});
    // const message = req.flash("error");
    // console.log(message);
    res.render("admin/admin/login", {
      title: ":: Admin Login ::",
      data: [],
      message: req.flash("error"),
      layout: "./layouts/admin/login_layout",
    });
  },
  loginPost: async(req, res) => {
    console.log(req.body)
    if (req.method === "POST") {
      var emailId = req.body.email;
      var password = req.body.password;

    await  db.Admin.findOne({
            where: {
                email: emailId
            }
         }).then(adminDetail => {
            
            if(adminDetail != null){
                
                bcrypt.compare(password, adminDetail.password, function (err, response) {
                    if (response == true) {
                        req.session.admin = adminDetail;
                        req.flash("success", "User successfully login.");
                        res.redirect("/admin/dashboard");
                    } else {
                      console.log('mihisanisna 0');
                        req.flash("error", "Invalid Password !!!");
                        res.redirect("/admin");
                    }
                });

            } else {
              console.log('mihisanisna 1');
                req.flash("error", "Invalid Email Id !!!");
                res.redirect("/admin"); 
            }
        
        }).catch((error) => {
          console.log('mihisanisna 2');
            console.error('Failed to retrieve admin detail : ', error);
        });
   
    } else {
        res.render('./admin/admin/login', {
            title : ':: Admin Login ::',
            data: [],
            message: req.flash("error"),
        });
    }
    // res.render("users/index", {data: "Dynamic Data"});
    // res.redirect("/admin/dashboard");
    //    res.render("web/index", {data: "Dynamic Data"});
  },
  register: (req, res) => {
    // res.render("users/index", {data: "Dynamic Data"});
    res.render("web/register", { data: "Dynamic Data" });
  },
  registerPost: (req, res) => {
    // res.render("users/index", {data: "Dynamic Data"});
    res.render("web/index", { data: "Dynamic Data" });
  },
  dashboard: (req, res) => {
    // res.render("users/index", {data: "Dynamic Data"});
    res.render("admin/dashboard/AdminDashboard", {
      layout: "./layouts/admin/admin_layout",
      data: "Dynamic Data",
      message: [],
      success: req.flash("success"),
    });
  },
  myProfile: (req, res) => {
    // res.render("users/index", {data: "Dynamic Data"});
    res.render("admin/admin/edit_profile", {
      layout: "./layouts/admin/admin_layout",
      data: "Dynamic Data",
    });
  },
  settings: (req, res) => {
    // res.render("users/index", {data: "Dynamic Data"});
    res.render("admin/admin/setting", {
      layout: "./layouts/admin/admin_layout",
      data: "Dynamic Data",
    });
  },
  logout: (req, res) => {
     delete req.session.admin;
    req.flash("success", "User successfully logout!");
    res.redirect("/admin");
  },
};
