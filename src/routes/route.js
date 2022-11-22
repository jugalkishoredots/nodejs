const express = require("express");
const UserController = require("../controllers/userController");
const AdminUserController = require("../controllers/AdminUserController");
const TestMiddleware = require("../middlewares/testMiddleware");
const webRouter = express.Router();
const adminRouter = express.Router();
const apiRouter = express.Router();


const router = (app) => {
  app.use("/", webRouter);
  webRouter.get("/", UserController.index);
  webRouter.get("/register", UserController.register);
  webRouter.post("/register-post", UserController.registerPost);
  webRouter.get("/login", UserController.login);
  webRouter.post("/login-post", UserController.loginPost);
  webRouter.get("/profile", UserController.index);

  app.use("/admin", adminRouter);

  adminRouter.all("*", (req, res, next) => {
    res.locals.layout = "./layouts/admin/admin_layout";
   // res.locals.layout = 'frontend/layouts/admin_layout';
    next();
    //console.log(req.session.admin);
  });
  adminRouter.get("/", (req, res) => {
    res.render("admin/login/login", { layout: "specific-layout" });
  });
  adminRouter.post("/loginPost", AdminUserController.loginPost);
  //adminRouter.get("/dashboard",AdminUserController.dashboard);
  adminRouter.get("/dashboard", (req, res) => {
    res.render("admin/dashboard/AdminDashboard", { title: "About Page" });
  });
  app.use("/api", apiRouter);
  apiRouter.get("/", (req, res) => {
    res.send("Api Working");
  });
};

module.exports = router;
