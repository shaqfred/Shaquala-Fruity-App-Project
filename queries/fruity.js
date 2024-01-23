const db = require("../db/dbConfig");

const getAllFruity = async () => {
  try {
    const allFruity = await db.any("SELECT * FROM fruity");
    return allFruity;
  } catch (error) {
    return error;
  }
};
const getOneFruity = async (fruitId) => {
  try {
    const oneFruity = await db.one("SELECT * FROM fruity WHERE id=$1", fruitId);
    return oneFruity;
  } catch (error) {
    return error;
  }
};
const createOneFruity = async ({
  name,
  category,
  facts,
  price,
  isFavorite,
}) => {
  try {
    const newFruity = await db.one(
      "INSERT INTO fruity (name,category,facts,price,isFavorite) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [name, category, facts, price, isFavorite]
    );
    return newFruity;
  } catch (error) {
    return error;
  }
};
const deleteOneFruity = async (fruitId) => {
  try {
    const deletedFruity = db.one(
      "DELETE FROM fruity WHERE id=$1 RETURNING *",
      fruitId
    );
    return deletedFruity;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllFruity,
  getOneFruity,
  createOneFruity,
  deleteOneFruity,
};
