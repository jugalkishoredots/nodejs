const express = require("express");
const UserController = require("../controllers/userController");
const AdminUserController = require("../controllers/Admin/AdminUserController");
const FaqController = require("../controllers/Admin/FaqController");
const auth = require("../middlewares/authentication");
const TestMiddleware = require("../middlewares/testMiddleware");
const webRouter = express.Router();
const adminRouter = express.Router();
const apiRouter = express.Router();


const router = (app) => {
  app.use("/", webRouter);
  webRouter.all("*", (req, res, next) => {
    res.locals.layout = "./layouts/web/web_layout";
    next();
  });
  webRouter.get("/", UserController.index);
  webRouter.get("/register", UserController.register);
  webRouter.post("/register-post", UserController.registerPost);
  webRouter.get("/login", UserController.login);
  webRouter.post("/login-post", UserController.loginPost);
  webRouter.get("/profile", UserController.index);

  
  // Start Admin Routes 
  app.use("/admin", adminRouter);

  adminRouter.all("*", (req, res, next) => {
    res.locals.layout = "./layouts/admin/admin_layout";
    // res.locals.layout = 'frontend/layouts/admin_layout';
    // res.locals.auth = req.session.admin && Object.keys(req.session.admin).length !== 0 ? req.session.admin : "";
    next();
    //console.log(req.session.admin);
  });
 
  adminRouter.get("/", auth.ifAdminLoggedin,AdminUserController.login);
  adminRouter.post("/loginPost", AdminUserController.loginPost);
  adminRouter.get("/dashboard", auth.adminAuth, AdminUserController.dashboard);
  adminRouter.get("/faq-manager", auth.adminAuth, FaqController.index);
  adminRouter.get("/my-profile", auth.adminAuth, AdminUserController.myProfile);
  adminRouter.get("/settings", auth.adminAuth, AdminUserController.settings);
  adminRouter.get("/logout", auth.adminAuth, AdminUserController.logout);

  //Start API Routes 
  app.use("/api", apiRouter);
  apiRouter.get("/", (req, res) => {
    res.send("Api Working");
  });
};

module.exports = router;
