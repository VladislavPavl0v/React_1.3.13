import React from 'react';
import Task from '../task'

import './task-list.css'

const TaskList = ({tasks}) => {
return (
<ul className="todo-list">
{tasks.map((task, index)=>(<Task key={index} task={task}/>
))}
  </ul>
);
}

export default TaskList;