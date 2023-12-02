import * as service from "./3-auth-service.js";

async function register(req, res) {
  const { userName, password, repeatedPassword } = req.body;
  if (password !== repeatedPassword) {
    res.status({ msg: "Both passwords must match" });
    return;
  }
  const token = await service.register(userName, password);
  res.json({ token });
}

async function login(req, res) {
  const { userName, password } = req.body;
  if (!userName || !password) {
    res.status(400);
    res.json("Username and password are required");
    return;
  }
  // console.log({ userName, password });
  const token = await service.login(userName, password);
  // console.log({ token });
  res.json({ token });
}

export {
  register,
  login,
}