import { Router } from "express";

const pageRouter = Router();

// HomePage
pageRouter.get("/", (req, res) => {
  res.render("index");
});

export default pageRouter;
