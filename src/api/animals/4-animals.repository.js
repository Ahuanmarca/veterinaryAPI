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
  // const updateInfo = 
  await animalModel.updateMany(
    { clientId: clientId },
    { $set: newProps },
    { new: true }
  );
  // console.log(updateInfo);
  const updatedAnimals = await animalModel.find({
    clientId: newProps.clientId || clientId,
  });
  return updatedAnimals;
}

async function getPaginated(skip, limit) {
  const animals = await animalModel
    .find({})
    .skip(skip)
    .limit(limit)
    .lean();
  return animals;
}

export { getAll, byClientDocument, updateByClient, getPaginated };
