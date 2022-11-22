module.exports = {
    index: (req, res) => {
       // res.render("users/index", {data: "Dynamic Data"});
       res.render("web/index", {data: "Dynamic Data"});
    },
    login: (req, res) => {
       // res.render("users/index", {data: "Dynamic Data"});
       res.render("web/login", {data: "Dynamic Data"});
    },
    loginPost: (req, res) => {
       // res.render("users/index", {data: "Dynamic Data"});
       res.render("web/index", {data: "Dynamic Data"});
    },
    register: (req, res) => {
       // res.render("users/index", {data: "Dynamic Data"});
       res.render("web/register", {data: "Dynamic Data"});
    },
    registerPost: (req, res) => {
       // res.render("users/index", {data: "Dynamic Data"});
       res.render("web/index", {data: "Dynamic Data"});
    }
}