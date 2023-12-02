import * as service from "./3-users-service.js";

async function getById(req, res) {
  const { id } = req.params;
  const user = await service.getById(id);
  res.json(user);
}

export {
  getById,
};


