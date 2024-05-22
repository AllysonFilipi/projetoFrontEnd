// src/App.js
import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, deleteToDo, getAllToDo, updateToDo, toggleCompleteToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text, date) => {
    setIsUpdating(true);
    setText(text);
    setDate(date);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>TaskMania</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Adicione uma tarefa..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            className="add"
            onClick={
              isUpdating
                ? () => updateToDo(toDoId, text, date, setToDo, setText, setDate, setIsUpdating)
                : () => addToDo(text, date, setText, setDate, setToDo)
            }
          >
            {isUpdating ? "Atualizar" : "Adicionar"}
          </button>
        </div>

        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              date={item.date}
              completed={item.completed}
              updateMode={() => updateMode(item._id, item.text, item.date)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
              toggleComplete={() => toggleCompleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
