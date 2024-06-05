//ToDo.js

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
        <span className="complete-btn" onClick={toggleComplete}>
          {completed ? <FaCheckCircle className="completed-icon" /> : <FaRegCircle className="not-completed-icon" />}
        </span>
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
