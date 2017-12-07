import React, { Component } from 'react';
import axios from 'axios';

class ToDo extends Component{
    
    constructor(){
        super();
        this.state = {
            taskList: [],
        }
        this.addNewTask = this.addNewTask.bind(this);
    }

    addNewTask(event){
        event.preventDefault();
        const task = document.getElementById('new-task').value;
        const taskDate = document.getElementById('new-task-date').value;

    }

    render(){
        var taskArray = this.state.taskList.map((task,i)=>{
            return(
                <tr>
                    <td key={i}>{task}</td>
                    <td key={i}>{task}</td>
                    <td key={i}>{task}</td>
                </tr>
            )
        });
        return(
            <div className="container">
                <form onSubmit={this.addNewTask} className="add-box">
                    <input type="text" id="new-task" placeholder="New Task" />
                    <input type="date" id="new-task-data" />
                    <button type="submit" className="btn btn-primary">Add Task</button>
                </form>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskArray}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ToDo;