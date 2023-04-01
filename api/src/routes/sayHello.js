import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  console.log("working...");
  res.json({ message: "is the primeagen" });
});

export default router;
