import { Router } from "express";
import { getUsers, getUserById } from "../models/users.js";

const router = Router();

router.get("/", (req, res) => {
  const users = getUsers();

  res.json({
    success: true,
    payload: users,
  });
});

router.get("/:userId", (req, res) => {
  const userId = Number(req.params.userId);
  const matchingUser = getUserById(userId);

  if (undefined === matchingUser) {
    return res.status(404).json({
      success: false,
      reason: `No user with ID ${userId} was found.`,
    });
  }

  res.json({
    success: true,
    payload: matchingUser,
  });
});

export default router;
