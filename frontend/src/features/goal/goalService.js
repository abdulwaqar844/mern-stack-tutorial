import axios from "axios";

const API_URL = `${config.apiUrl}/goal/`;
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, goalData, config);

  return response.data;
};
const getGoals = async (token) => {
  const configuration = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, configuration);

  return response.data;
};
const deleteGoals = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + goalId, configuration);
  return response.data;
};

const goalService = { createGoal, getGoals, deleteGoals };
export default goalService;
