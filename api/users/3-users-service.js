import * as repository from "./4-users-repository.js";

async function getById(id) {
  const user = await repository.getById(id);
  return user;
}

export {
  getById,
};
