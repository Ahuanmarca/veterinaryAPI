import * as usersRepository from "../users/4-users-repository.js";
import { hashSync, compareSync } from "bcrypt";
import jwt from "jsonwebtoken";

function getToken(userId) {
  const payload = {
    userId,
  }
  const secretWord = "youwillneverguess";
  const options = {
    expiresIn: 60 * 60,
  }
  const token = jwt.sign(payload, secretWord, options);
  return token;
}

async function register(userName, password) {
  const hashedPassword = hashSync(password, 5);
  const user = await usersRepository.create(userName, hashedPassword);
  // const token = `${user.userName}Patata`;
  const token = getToken(user._id);
  return token;
}

async function login(userName, password) {
  const user = await usersRepository.getByUsername(userName);
  let token;
  // console.log(user.password, compareSync(password, user.password));
  if (user && compareSync(password, user.password)) {
    token = getToken(user._id);
  }
  return token;
}

export {
  register,
  login,
}