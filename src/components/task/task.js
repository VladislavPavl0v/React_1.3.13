
import React from "react";
import { formatDistanceToNow } from 'date-fns';

import './task.css'

const Task = ({ task }) => {
    return (
      <li className={task.status}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">{task.description}</span>
            <span className="created">created {formatDistanceToNow(task.created)} ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
        {task.status === "editing" && (
          <input type="text" className="edit" value={task.description} />
        )}
      </li>
    );
  }

export default Task;

