import {
  getDataController,
  insertUserController,
  updateUserController,
  deleteUserController,
} from "./controller.js";
import express from "express";
const router = express.Router();

router.get("/test/app/:id", getDataController);
router.post("/add/user", insertUserController);
router.put("/update/user/:id", updateUserController);
router.delete("/remove/user/:id", deleteUserController);
export { router };
