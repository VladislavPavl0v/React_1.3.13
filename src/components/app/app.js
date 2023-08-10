import React from "react";
import NewTaskForm from '../new-task-form';
import TaskList from "../task-list/task-list";
import Footer from "../footer";

import './app.css';
const App = () => {
    const taskList = [
        { status: "completed", description: "Completed task", created: new Date() },
        { status: "editing", description: "Editing task", created: new Date() },
        { status: "", description: "Active task", created: new Date() },
      ];
    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <NewTaskForm />
            </header>
            <section className="main">
                <TaskList tasks={taskList}/>
                <Footer />
            </section>
        </section>

    );
}
export default App;