import * as service from "./3-animals.service.js";

async function getAll(req, res) {
  const { query } = req;
  const animals = await service.getAll(query);
  res.json(animals);
}

async function byClientDocument(req, res) {
  const clientDocumentNumber = req.params.number;
  const animals = await service.byClientDocument(clientDocumentNumber);
  res.json(animals);
}

async function updateByClient(req, res) {
  const clientDocumentNumber = req.params.number;
  const newProps = req.body;
  const updatedAnimals = await service.updateByClient(
    clientDocumentNumber,
    newProps
  );
  res.json(updatedAnimals);
}

async function getPaginated(req, res) {
  const { page, itemsPerPage } = req.params;
  const animals = await service.getPaginated( page, itemsPerPage );
  res.json(animals);
}

export { getAll, byClientDocument, updateByClient, getPaginated };
