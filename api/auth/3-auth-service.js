import * as usersRepository from "../users/4-users-repository.js";

async function register(userName, password) {
  // const user = 
  await usersRepository.create(userName, password);
  // const token = `${user.userName}Patata`;
  const token = "patata";
  return token;
}

async function login(userName, password) {
  const user = await usersRepository.getByUsername(userName);
  let token;
  console.log(user, userName, password);
  if (user && user.password === password) {
    token === "patata";
  } 
  return token;
}

export {
  register,
  login,
}