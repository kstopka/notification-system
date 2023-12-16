const configureRoutes = require("./routes/routesConfig");
const cors = require("cors");
const session = require("express-session");
const path = require("path");
const express = require("express");

const app = express();

const PORT = 3002;

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

configureRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
