const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//Importing database
const sequelize = require("./backend/util/database");

//Importing Data Models
const User = require("./backend/models/user");

const app = express();

app.use(cors());
// app.get("/test", function (req, res) {
//   res.sendFile("views/index.html", { root: __dirname });
// });

//Importing routes
const userRoutes = require("./backend/routes/userroute");

//using bodyparser and path
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "public")));

//Using routes
app.use(userRoutes);

//It syncs our data models to the database by creating appropriate tables & relations.
sequelize
  .sync()
  .then((result) => {
    app.listen(3000, () => {
      console.log("server running");
    });
  }) //create a new user at the app start if no user exists.
  .catch((err) => {
    console.log(err);
  });

// .sync({ force: true })
