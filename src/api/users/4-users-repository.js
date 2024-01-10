import userModel from "./users-model.js";

async function getById(id) {
  const user = await userModel.findOne({ _id: id }).lean();
  return user;
}

async function create(username, password) {
  const user = await userModel.create({ username, password });
  return user;
}

async function getByusername(username) {
  // TODO FIX THIS SHIT !!! - change userName for username on the db
  const user = await userModel.findOne({ userName: username }).lean();
  return user;
}

export { getById, create, getByusername };
