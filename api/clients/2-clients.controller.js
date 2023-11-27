import * as service from "./3-clients.service.js";

async function all(req, res) {
  const clients = await service.all();
  res.json(clients);
}

async function filter(req, res) {
  const { query } = req;
  const clients = await service.filter(query);
  res.json(clients);
}

async function getById(req, res) {
  const { id } = req.params;
  const client = await service.getById(id);
  res.json(client);
}

async function create(req, res) {
  const { body } = req;
  if (!Object.keys(body).length) {
    res.status(400);
    res.json({ error: "empty body", body: body });
    return;
  }
  const newClient = await service.create(body);
  res.json(newClient);
}

async function deleteClient(req, res) {
  const { body } = req;
  const mongoDBIdRegex = /^[0-9a-fA-F]{24}$/;
  if (!mongoDBIdRegex.test(body.id)) {
    res.json({ error: "Invalid MongoDB ID" });
    return;
  }
  const deletedClient = await service.deleteClient(body);
  res.json(deletedClient);
}

async function editClient(req, res) {
  const { body } = req;
  const editedClient = await service.editClient(body);
  res.json(editedClient);
}

async function getByDocument(req, res) {
  const { number } = req.params;

  // Check if it's a valid spanish DNI
  const spanishDNIRegex = /^[0-9]{8}[A-Za-z]$/;
  if (!spanishDNIRegex.test(number)) {
    res.status(400);
    res.json({ error: "invalid DNI", number: number });
    return;
  }
  const client = await service.getByDocument(number);
  res.json(client);
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
