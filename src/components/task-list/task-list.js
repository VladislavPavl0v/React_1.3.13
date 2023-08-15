import React,{Component} from 'react';
import Task from '../task'

import './task-list.css'


export default class TaskLis extends Component {

render() {
  const {tasks, onDeleted} = this.props;
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (<Task key={index} task={task} onDeleted={()=>onDeleted(task)}/>
      ))}
 
    </ul>
  );
 }
}
