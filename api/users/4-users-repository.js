import userModel from "./users-model.js";

async function getById(id) {
  const user = await userModel.findOne({ _id: id }).lean();
  return user;
}

async function create(userName, password) {
  const user = await userModel.create({ userName, password });
  return user;
}

async function getByUsername(username) {
  const user = await userModel.findOne({ userName: username }).lean();
  return user;
}

export {
  getById,
  create,
  getByUsername,
};
