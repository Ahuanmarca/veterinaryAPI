import * as repository from "./4-clients.repository.js";

async function all() {
  const clients = await repository.all();
  return clients;
}

async function filter(query) {
  const clients = await repository.filter(query);
  return clients;
}

async function getById(id) {
  const client = await repository.getById(id);
  return client;
}

async function create(body) {
  const newClient = await repository.create(body);
  return newClient;
}

async function deleteClient(body) {
  const deletedClient = await repository.deleteClient(body);
  return deletedClient;
}

async function editClient(body) {
  const editedClient = await repository.editClient(body);
  return editedClient;
}

async function getByDocument(number) {
  // const client = await repository.getByDocument(number);
  // return client;
  return repository.getByDocument(number);
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
