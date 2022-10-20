const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
require("./src/routes/route")(app);

app.set('view engine', 'ejs');
// app.set("view engine", "pug");
app.set("views", path.join(__dirname, "src/views"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})