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

export { getAll, byClientDocument, updateByClient };
