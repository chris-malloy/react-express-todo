import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// custom components
import ToDo from './components/ToDo';
import NavBar from './components/NavBar';
import Heading from './components/Heading';
import Students from './components/Students';


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

		return (
			<div className="to-do-app">
				<NavBar />
				<Heading />
				<ToDo />
				<div className="App container">
		
				</div>
			</div>
		);
	}
}

export default App;
