import axios from "axios";

export async function getBeans(pageIndex: number) {
  const { data } = await axios.get(
    `https://jellybellywikiapi.onrender.com/api/beans?pageIndex=${pageIndex}`
  );
  return data.items;
}

export async function getFacts(pageIndex: number) {
  const { data } = await axios.get(
    `https://jellybellywikiapi.onrender.com/api/facts?pageIndex=${pageIndex}`
  );
  return data.items;
}

export async function getRecipes(pageIndex: number) {
  const { data } = await axios.get(
    `https://jellybellywikiapi.onrender.com/api/recipes?pageIndex=${pageIndex}`
  );
  return data.items;
}

export async function getCombinations(pageIndex: number) {
  const { data } = await axios.get(
    `https://jellybellywikiapi.onrender.com/api/combinations?pageIndex=${pageIndex}`
  );
  return data.items;
}

export async function getHistory(pageIndex: number) {
  const { data } = await axios.get(
    `https://jellybellywikiapi.onrender.com/api/mileStones?pageIndex=${pageIndex}`
  );
  return data.items;
}
