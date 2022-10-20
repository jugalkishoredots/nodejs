const express = require("express");
const UserController = require("../controllers/userController");
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
  adminRouter.get("/", (req, res) => {
    res.send("Admin Working");
  });

  app.use("/api", apiRouter);
  apiRouter.get("/", (req, res) => {
    res.send("Api Working");
  });
};

module.exports = router;
