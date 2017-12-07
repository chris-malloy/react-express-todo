import React, { Component } from 'react';
import axios from 'axios';

class ToDo extends Component{
    
    constructor(){
        super();
        this.state = {
            taskList: [],
        }
        this.addNewTask = this.addNewTask.bind(this);
        console.log(this.state.taskList)
    }

    componentWillMount(){
        axios({
            method: "GET",
            url: "http://localhost:3000/getTasks",
        }).then((taskData)=>{
            this.setState({
                taskList: taskData.data
            })
        })
    }

    addNewTask(event){
        event.preventDefault();
        const task = document.getElementById('new-task').value;
        const taskDate = document.getElementById('new-task-date').value;
        axios({
            method: "POST",
            url: "http://localhost:3000/addTask",
            data:{
                taskName: task,
                taskDate: taskDate
            }
        }).then((taskData)=>{
            console.log(taskData.data);
            this.setState({
                taskList: taskData.data
            })
        })
    }

    render(){
        var taskArray = this.state.taskList.map((task,i)=>{    
            return(
                <tr>
                    <td key={i}><span className="green-text">Task:</span> {task.taskName} <span className="red-text">Due Date:</span> {task.taskDate}</td>
                    <td key={i}><button className="btn red lighten-1">Delete</button></td>
                    <td key={i}><button className="btn light-blue">Edit</button></td>
                </tr>
            )
        });
        return(
            <div className="container">
                <form onSubmit={this.addNewTask} className="add-box">
                    <input type="text" id="new-task" placeholder="New Task" />
                    <input type="date" id="new-task-date" />
                    <button type="submit" className="btn light-green">Add Task</button>
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
                        {console.log(taskArray)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ToDo;