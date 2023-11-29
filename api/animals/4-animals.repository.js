import animalModel from "./animals.model.js";

function getAll(query) {
  const animals = animalModel
    .find(query)
    .populate({ path: "clientId", select: "name surname phone -_id" })
    .lean();
  return animals;
}

async function byClientDocument(clientId) {
  const animals = await animalModel
    .find({ clientId })
    .populate({ path: "clientId", select: "name surname phone -_id" });
  return animals;
}

async function updateByClient(clientId, newProps) {
  const updateInfo = await animalModel.updateMany(
    { clientId: clientId },
    { $set: newProps },
    { new: true }
  );
  console.log(updateInfo);
  const newClientId = newProps.clientId;
  const updatedAnimals = await animalModel.find({
    clientId: newClientId ? newClientId : clientId,
  });
  return updatedAnimals;
}

export { getAll, byClientDocument, updateByClient };
