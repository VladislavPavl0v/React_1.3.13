
import React, { Component } from "react";
import { formatDistanceToNow, /*isThisSecond*/ } from 'date-fns';

import './task.css'

export default class Task extends Component {
  state = {
    done: false
 };

  onLabelClick = () => {
    this.setState(({done})=>{
        return {
       done: !done        
        };
    });
  };

  render() {
    const { task,onDeleted} = this.props;
    //const { label, important = false } = this.props;
    const { done} = this.state;

    let classNames = `${task.status}`;
    if (done) {
      classNames += "completed";
    }
    return (
      <li className={classNames}>
        <div className="view">
          <input onClick={this.onLabelClick} className="toggle" type="checkbox" />
          <label onClick={this.onLabelClick}>
            <span className="description">{task.description}</span>
            <span className="created">created {formatDistanceToNow(task.created)} ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted} ></button>
        </div>
        {task.status === "editing" && (
          <input type="text" className="edit" defaultValue={task.description} />
        )}
      </li>
    );
  }
}


