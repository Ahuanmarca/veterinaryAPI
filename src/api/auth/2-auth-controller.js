import * as service from "./3-auth-service.js";

async function register(req, res) {
  const { username, password, repeatedPassword } = req.body;
  if (password !== repeatedPassword) {
    res.status({ msg: "Both passwords must match" });
    return;
  }
  const token = await service.register(username, password);
  res.json({ token });
}

async function login(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    res.json("username and password are required");
    return;
  }
  const token = await service.login(username, password);
  res.json({ token });
}

export { register, login };
