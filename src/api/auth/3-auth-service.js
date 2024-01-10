import * as usersRepository from "../users/4-users-repository.js";
import { hashSync, compareSync } from "bcrypt";
import jwt from "jsonwebtoken";

function getToken(userId) {
  const payload = {
    userId,
  }

  const { TOKEN_SECRET_WORD, TOKEN_TIMEOUT } = process.env;
  // const TOKEN_SECRET_WORD = "youWillNeverGuess";
  // const TOKEN_TIMEOUT = "1h";
  const options = {
    expiresIn: TOKEN_TIMEOUT,
  }
  const token = jwt.sign(payload, TOKEN_SECRET_WORD, options);
  return token;
}

async function register(username, password) {
  const { SALT_OR_ROUNDS_HASH } = Number(process.env);
  const hashedPassword = hashSync(password, SALT_OR_ROUNDS_HASH);
  const user = await usersRepository.create(username, hashedPassword);
  // const token = `${user.username}Patata`;
  const token = getToken(user._id);
  return token;
}

async function login(username, password) {
  const user = await usersRepository.getByusername(username);
  let token;
  if (user && compareSync(password, user.password)) {
    token = getToken(user._id);
  }
  return token;
}

export {
  register,
  login,
}