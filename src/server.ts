import express from "express";
import { PORT } from "../config";
import pageRouter from "./router/pageRouter";

const app = express();
app.set("view engine", "ejs");
app.set("views", "public");

app.use(express.static("public"));

app.use(pageRouter);

export function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
