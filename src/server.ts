import express from "express";
import { PORT } from "../config";
import pageRouter from "./router/pageRouter";

const app = express();
app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.static("src/static"));

app.use(pageRouter);

export function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
