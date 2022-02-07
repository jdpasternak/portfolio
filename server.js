const express = require("express");
const router = express.Router();
const path = require("path");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const routes = require("./controllers");
const PORT = process.env.PORT || 3001;

const app = express();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Now listening on http://localhost:${PORT}`);
});
