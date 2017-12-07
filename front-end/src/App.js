import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// custom components
import ToDo from './components/ToDo';
import NavBar from './components/NavBar';
import Heading from './components/Heading';

class App extends Component {
	constructor(){
		super();
		this.state = {
			students: [],
		}
		this.handleSubmit = this.handleSubmit.bind(this);
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
		}).then((studentData)=>{
			console.log(studentData)
			this.setState({
				students: studentData.data,
			})
		})
	};

	render() {
		console.log(this.state)
		var studentsArray = this.state.students.map((student,i)=>{
			return(<li key={i}>{student.name}</li>)
		})
		return (
			<div className="to-do-app">
				<NavBar />
				<Heading />
				<ToDo />
				<div className="App container">
				{/*<div className="row">
						<div className="col s12">
							<form onSubmit={this.handleSubmit}>
								<input type="text" id="new-student" placeholder="New Student Name"/>
								<button type="submit">Add Student</button>
							</form>
						</div>
						<div>
							{studentsArray}
						</div>
					</div>*/}
				</div>
			</div>
		);
	}
}

export default App;
