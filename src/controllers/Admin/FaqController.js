const db = require("../../../models");
module.exports = {
  index: (req, res) => {
    db.Faq.findAll({}).then((faq_list) => {
        res.render("admin/faq/index", {
            title: ":: View FAQs List ::",
            message: req.flash("success"),
            layout: "./layouts/admin/admin_layout",
            data: faq_list,
        });
      })
      .catch((error) => {
        console.error("Failed to retrieve user detail : ", error);
      });    
  },
};
