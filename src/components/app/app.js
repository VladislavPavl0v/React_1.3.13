import React, { Component } from "react";


import NewTaskForm from '../new-task-form';
import TaskList from "../task-list/task-list";
import Footer from "../footer";

import './app.css';
export default class App extends Component {
    maxId = 100;
    state = {
        tasks: [
            { status: "completed", description: "Completed task", created: new Date(), id: 0 },
            { status: "editing", description: "Editing task", created: new Date(), id: 1 },
            { status: "", description: "Active task", created: new Date(), id: 2 }
        ]
    };
    deleteItem = (id) => {
        this.setState(({ tasks }) => {
            const idx = tasks.findIndex((el) => el.id === id);
            const newArray = [...tasks.slice(0, idx)/*,
                ...tasks.slice(idx + 1)*/
            ];
            return {
                tasks: newArray
            };
        });
    };
    addItem = (text) => {
        const newItem = {
            status: "",
            created: new Date(),
            description: text,
            id: this.maxId++
        };
        this.setState(({ tasks }) => {
            const newArr = [...tasks,
                newItem
            ]
            return {
                tasks: newArr
            };
        });
    };



    render() {
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm onItemAdded={this.addItem} />
                </header>
                <section className="main">
                    <TaskList tasks={this.state.tasks}
                        onDeleted={this.deleteItem}
                    />
                    <Footer />
                </section>
            </section>

        );
    }

    
}

