const express = require("express");
const fruity = express.Router();

const {
  getAllFruity,
  getOneFruity,
  createOneFruity,
  deleteOneFruity,
} = require("../queries/fruity");

//get all fruity//
fruity.get("/", async (request, response) => {
  try {
    const allFruity = await getAllFruity();
    response.status(200).json({ allFruity });
  } catch (error) {
    response.status(404).json({ message: error });
  }
  //  response.json("Here is all our fruity");
});
//get one//
fruity.get("/:fruitId", async (request, response) => {
  const { fruitId } = request.params;
  // console.log(`Here is the fruit with an id of : ${id}`);
  try {
    const oneFruity = await getOneFruity(fruitId);
    response.status(200).json({ oneFruity });
  } catch (error) {
    response.status(404).json({ message: error });
  }
});
//create or post a new//
fruity.post("/new", async (request, response) => {
  const body = request.body;
  // console.log(`A new fruit has been created`);
  try {
    const newFruity = await createOneFruity(body);
    response.status(201).json({ newFruity });
  } catch (error) {
    response.status(404).json({ message: error });
  }
});

//update
fruity.put("/:fruitId", async (request, response) => {
  const id = request.params.fruitId;
  const body = request.body;
  console.log(`The fruit with ${id} has been updated `);
});
//delete
fruity.delete("/:fruitId", async (request, response) => {
  const { fruitId } = request.params;
  // console.log(`The fruit with an id of ${id} has been deleted`);
  try {
    const deletedFruity = await deleteOneFruity(fruitId);
    response.status(200).json({ deletedFruity });
  } catch (error) {
    response.status(404).json({ message: error });
  }
});
module.exports = fruity;
