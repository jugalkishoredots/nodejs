module.exports = {
    index: (req, res) => {
       res.render("admin/faq/index", { layout: './layouts/admin/admin_layout', data: "Dynamic Data"});
    }
}