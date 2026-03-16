const userService = require("../services/userService");

exports.createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  res.json(user);
};

exports.getUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
};

exports.getUser = async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  res.json(user);
};

exports.updateUser = async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body);
  res.json(user);
};

exports.deleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);
  res.json({ message: "User deleted" });
};