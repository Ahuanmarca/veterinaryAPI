import clientModel from "./clients.model.js";

async function all() {
  const clients = await clientModel.find({}).lean();
  return clients;
}

async function filter(query) {
  const clients = await clientModel.find(query);
  return clients;
}

async function getById(id) {
  const client = await clientModel.findById(id);
  return client;
}

async function create(body) {
  const newClient = await clientModel.create(body);
  return newClient;
}

async function deleteClient(body) {
  const deletedClient = await clientModel.findOneAndDelete({ _id: body.id });
  return deletedClient;
}

async function editClient(body) {
  const filter = { _id: body.id };
  delete body.id;
  const editedClient = await clientModel.findOneAndUpdate(filter, body, {
    new: true,
  });
  return editedClient;
}

async function getByDocument(number) {
  // const client = await clientModel.findOne({ "document.number": number }).lean();
  // return client;
  return clientModel.findOne({ "document.number": number }).lean();
}

export {
  all,
  filter,
  getById,
  create,
  deleteClient,
  editClient,
  getByDocument,
};

/**
 * lean()
 * transforma el objeto de mongoose
 * y lo convierte en un valor alterable
 */
