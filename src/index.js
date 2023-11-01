import express from "express";
import { engine } from "express-handlebars";
import routes from "./routes/index.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 8888;
// set method iamge, css

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static("src/public"));

app.engine(".hbs", engine({ extname: ".hbs" }));
// app.set("view engine", ".hbs");
// app.set("views", "./src/views");
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Connect.... success");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/introduce", (req, res) => {
  res.send("<h1>This is introduce page</h1>");
});

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  res.render("about", { title: "Anh Tuấn", address: "Quảng Bình" });
});

app.get("/sp", (req, res) => {
  let sp = [
    { name: "HTC M9", price: 6000000 },
    { name: "Samsung S8", price: 750000 },
  ];
  res.render("sp", { sp: sp });
});

routes(app);

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
