import axios from "axios";

const baseURL = "https://projetobackend-7pp7.onrender.com"; // Certifique-se de que a URL do backend está correta

const getAllToDo = (setToDo) => {
  axios.get(baseURL)
    .then(({ data }) => {
      setToDo(data);
    })
    .catch((err) => {
      console.error(err);
    });
};

const addToDo = (text, date, setText, setDate, setToDo, setIsLoading) => {
  axios.post(`${baseURL}/save`, { text, date })
    .then(({ data }) => {
      setText("");
      setDate("");
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      setIsLoading(false); // Para o carregamento
    });
};

const updateToDo = (toDoId, text, date, setToDo, setText, setDate, setIsUpdating, setIsLoading) => {
  axios.post(`${baseURL}/update`, { _id: toDoId, text, date })
    .then(({ data }) => {
      setText("");
      setDate("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      setIsLoading(false); // Para o carregamento
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
