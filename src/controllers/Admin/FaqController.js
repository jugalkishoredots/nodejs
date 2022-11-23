const db = require("../../../models");
module.exports = {
  index: (req, res) => {
    db.Faq.findAll({})
      .then((faq_list) => {
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
  add: (req, res) => {
    res.render("admin/faq/create", {
      title: ":: Create FAQs ::",
      message: req.flash("success"),
      layout: "./layouts/admin/admin_layout",
    });
  },
  save: async (req, res) => {
    await db.Faq.create({
      question: req.body.question,
      answer: req.body.answer,
      status: req.body.status,
    })
      .then((faq_data) => {
        req.flash("success", "FAQ successfully Created!");
        res.redirect("/admin/faq-manager");
      })
      .catch((error) => {
        console.error("Failed to retrieve Faq detail : ", error);
      });
  },
  edit: (req, res) => {
    db.Faq.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((faq_data) => {
        res.render("admin/faq/edit", {
          title: ":: View FAQs ::",
          message: req.flash("success"),
          layout: "./layouts/admin/admin_layout",
          data: faq_data,
        });
      })
      .catch((error) => {
        console.error("Failed to retrieve Faq detail : ", error);
      });
  },
  delete: (req, res) => {
    db.Faq.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((faq_data) => {
        req.flash("success", "FAQ successfully deleted!");
        res.redirect("/admin/faq-manager");
      })
      .catch((error) => {
        console.error("Failed to retrieve Faq detail : ", error);
      });
  },
  update: async (req, res) => {
    await db.Faq.update(
      {
        question: req.body.question,
        answer: req.body.answer,
        status: req.body.status,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((faq_data) => {
        req.flash("success", "FAQ successfully updated!");
        res.redirect("/admin/faq-manager");
      })
      .catch((error) => {
        console.error("Failed to retrieve Faq detail : ", error);
      });
  },
};
