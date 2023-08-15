import React, { Component } from 'react';

import './new-task-form.css'


export default class NewTaskForm extends Component {
    state = {
        inputValue: ''
    };
    onInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    }
    onItemAdded = (e) => {
        if (e.key === 'Enter') {
            const text = this.state.inputValue;
            this.props.onItemAdded(text); // Вызовите переданную функцию для добавления задачи
            this.setState({
                inputValue: ''  // Очистите поле ввода после добавления
            });
        }
    }

    render() {
        return (<input className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={this.state.inputValue}
        onChange={this.onInputChange}
        onKeyDown={this.onItemAdded}
        />);
    };
}

