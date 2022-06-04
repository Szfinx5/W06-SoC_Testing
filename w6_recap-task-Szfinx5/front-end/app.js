import express from "express";
import logger from "morgan";

const app = express();

app.use(logger("dev"));
app.use(express.static("public"));

/** This route serves our front-end */
app.get("/", function (req, res) {
  res.render("index", { title: "Home page" });
});

export default app;
