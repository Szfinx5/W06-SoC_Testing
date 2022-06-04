import { Router } from "express";
import * as usersModel from "../models/users.js";

const router = Router();

router.get("/", async (req, res) => {
  const username = req.query.username;
  let users;

  if (username) {
    users = await usersModel.getUsersByUsername(username);
  } else {
    users = await usersModel.getUsers();
  }

  res.json({
    success: true,
    payload: users,
  });
});

router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  const user = await usersModel.getUserById(userId);

  if (!user) {
    return res.status(404).json({
      success: false,
      reason: `No user with that ID ${userId} was found!`,
    });
  }

  res.json({
    success: true,
    payload: user,
  });
});

router.post("/", async (req, res) => {
  const { username } = req.body;
  const createdUser = await usersModel.createUser({ username });

  res.status(201).json({
    success: true,
    payload: createdUser,
  });
});

router.delete("/:id", async (req, res) => {
  const idToDelete = req.params.id;
  const deletedUser = await usersModel.deleteUserById(idToDelete);

  res.json({
    success: true,
    payload: deletedUser,
  });
});

export default router;
