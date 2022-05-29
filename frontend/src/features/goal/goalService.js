import axios from "axios";

const API_URL = `http://localhost:4000/goal/`;
const createGoal = async (goalData, token) => {
  const configurations = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, goalData, configurations);

  return response.data;
};
const getGoals = async (token) => {
  const configurations = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, configurations);

  return response.data;
};
const deleteGoals = async (goalId, token) => {
  const configurations = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + goalId, configurations);
  return response.data;
};

const goalService = { createGoal, getGoals, deleteGoals };
export default goalService;
