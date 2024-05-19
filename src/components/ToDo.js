// src/components/ToDo.js
import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const ToDo = ({ text, date, completed, updateMode, deleteToDo, toggleComplete }) => {
  return (
    <div className={`todo ${completed ? 'completed' : ''}`}>
      <div>
        <div className="text">{text}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
      </div>
      <div className="icons">
        <button onClick={toggleComplete} className="complete-btn">
          {completed ? <FaCheckCircle className="icon completed-icon" /> : <FaRegCircle className="icon not-completed-icon" />}
        </button>
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
