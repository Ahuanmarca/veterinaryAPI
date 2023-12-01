import clientModel from "./clients.model.js";

async function all() {
  const clients = await clientModel.find({}).lean();
  return clients;
}

async function filter(query) {
  const clients = await clientModel.find(query);
  return clients;
}

async function create(body) {
  const newClient = await clientModel.create(body);
  return newClient;
}

async function deleteClient(body) {
  const deletedClient = await clientModel.findOneAndDelete({ _id: body.id });
  return deletedClient;
}

async function replace(body) {
  const _id = body.id;
  delete body.id;
  const replacedClient = await clientModel.findOneAndReplace({ _id }, body, {
    new: true,
  });
  return replacedClient;
}

async function edit(_id, body) {
  const updatedClient = await clientModel.findByIdAndUpdate({ _id }, body, {
    new: true,
  })
  return updatedClient;
}

async function getByDocument(number) {
  // const client = await clientModel.findOne({ "document.number": number }).lean();
  // return client;
  return clientModel.findOne({ "document.number": number }).lean();
}

export {
  all,
  filter,
  create,
  deleteClient,
  replace,
  edit,
  getByDocument,
};

/**
 * lean()
 * transforma el objeto de mongoose
 * y lo convierte en un valor alterable
 */
