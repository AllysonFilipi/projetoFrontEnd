// src/utils/HandleApi.js
import axios from "axios";

const baseURL = "http://localhost:5000"; // Certifique-se de que a URL do backend está correta

const getAllToDo = (setToDo) => {
  axios.get(baseURL)
    .then(({ data }) => {
      setToDo(data);
    })
    .catch((err) => {
      console.error(err);
    });
};

const addToDo = (text, date, setText, setDate, setToDo) => {
  axios.post(`${baseURL}/save`, { text, date })
    .then(({ data }) => {
      setText("");
      setDate("");
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.error(err);
    });
};

const updateToDo = (toDoId, text, date, setToDo, setText, setDate, setIsUpdating) => {
  axios.post(`${baseURL}/update`, { _id: toDoId, text, date })
    .then(({ data }) => {
      setText("");
      setDate("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.error(err);
    });
};

const deleteToDo = (toDoId, setToDo) => {
  axios.post(`${baseURL}/delete`, { _id: toDoId })
    .then(({ data }) => {
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.error(err);
    });
};

const toggleCompleteToDo = (toDoId, setToDo) => {
  axios.post(`${baseURL}/toggle-complete`, { _id: toDoId })
    .then(({ data }) => {
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.error(err);
    });
};

export { getAllToDo, addToDo, updateToDo, deleteToDo, toggleCompleteToDo };