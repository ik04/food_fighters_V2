import axios from "axios";

export default async function handler(req, res) {
  const apiKey = "b003a8d1459c44c7bccd48004c257852";
  const { query } = req.query;

  const response = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`
  );
  const data = await response.data;

  res.status(200).json(data);
}
