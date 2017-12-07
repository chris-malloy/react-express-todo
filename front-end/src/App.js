import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
	constructor(){
		super();
		this.state = {
			students: [],
		}
	}

	componentDidMount(){
		axios.get('http://localhost:3000/getStudents')
			.then((response)=>{
				console.log(response)
				this.setState({
					students: response.data,
				})
		})
	}

	handleSubmit(event){
		event.preventDefault();
		const studentName = document.getElementById('new-student').value;
		axios({
			method: "POST",
			url: "http://localhost:3000/addStudent",
			// express will have accesss to this data object
			data: {
				studentName: studentName
			}
		}).then((data)=>{
			console.log(data)
		})
		
	}
	render() {
		console.log(this.state)
		var studentsArray = this.state.students.map((student,i)=>{
			return(<li key={i}>{student.name}</li>)
		})
		return (
			<div className="App">
				<div>
					<h1>Todo</h1>
				</div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" id="new-student" placeholder="New Student Name"/>
					<button type="submit">Add Student</button>
				</form>
				<div>
					{studentsArray}
				</div>
			</div>
		);
	}
}

export default App;
