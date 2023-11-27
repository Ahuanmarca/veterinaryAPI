import * as repository from "./4-clients.repository.js";

async function all() {
  const clients = await repository.all();
  return clients;
}

async function filter(query) {
  const clients = await repository.filter(query);
  return clients;
}

async function create(body) {
  const newClient = await repository.create(body);
  return newClient;
}

async function deleteClient(body) {
  const deletedClient = await repository.deleteClient(body);
  return deletedClient;
}

async function replace(body) {
  const replacedClient = await repository.replace(body);
  return replacedClient;
}

async function edit(id, body) {
  const editedClient = await repository.edit(id, body);
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
  create,
  deleteClient,
  replace,
  edit,
  getByDocument,
};
