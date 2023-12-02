import * as repository from "./4-animals.repository.js";
import * as clientsService from "../clients/3-clients.service.js";

async function getAll(query) {
  const animals = await repository.getAll(query);
  return animals;
}

async function byClientDocument(clientDocumentNumber) {
  const client = await clientsService.getByDocument(clientDocumentNumber);
  const animals = await repository.byClientDocument(client._id);
  return animals;
}

async function updateByClient(clientDocumentNumber, newProps) {
  const client = await clientsService.getByDocument(clientDocumentNumber);
  const updatedAnimals = await repository.updateByClient(client._id, newProps);
  return updatedAnimals;
}

export { getAll, byClientDocument, updateByClient };
