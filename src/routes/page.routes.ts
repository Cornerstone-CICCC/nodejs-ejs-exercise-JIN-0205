import { Router, Request, Response } from "express";

const pageRouter = Router();

// Home
pageRouter.get("/", (req: Request, res: Response) => {
  res.status(200).render("index");
});
// About
pageRouter.get("/about", (req: Request, res: Response) => {
  res.status(200).render("about");
});
// Contact
pageRouter.get("/contact", (req: Request, res: Response) => {
  res.status(200).render("contact");
});

export default pageRouter;
