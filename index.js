const express           = require('express');
const expressLayouts    = require('express-ejs-layouts');
// const flash             = require('connect-flash');
const { flash } = require('express-flash-message');
const session           = require('express-session');
const bodyParser        = require('body-parser');
const app               = express();
const port              = 3000;
const path              = require("path");

app.set('view engine', 'ejs');
app.use(expressLayouts);
// app.set('layout', './layouts/web/web_layout');


// Set Templating Engine
app.use("/public", express.static("public"));
app.set("views", path.join(__dirname, "src/views"));



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use('/public', express.static(path.join(__dirname, 'public')));
// express-session
app.use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        // secure: true, // becareful set this option, check here: https://www.npmjs.com/package/express-session#cookiesecure. In local, if you set this to true, you won't receive flash as you are using `http` in local, but http is not secure
      },
    })
  );
app.use(flash());


require("./src/routes/route")(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})