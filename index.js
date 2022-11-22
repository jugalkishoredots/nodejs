const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;
const path = require("path");

app.set('view engine', 'ejs');
app.use(expressLayouts);


// Set Templating Engine
app.use("/public", express.static("public"));
app.set("views", path.join(__dirname, "src/views"));



// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use('/public', express.static(path.join(__dirname, 'public')));


require("./src/routes/route")(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})