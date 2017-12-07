import React from 'react';

export default function(){
    console.log(this.state)
    var studentsArray = this.state.students.map((student,i)=>{
        return(<li key={i}>{student.name}</li>)
    })
    return(
        <div className="row">
            <div className="col s12">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="new-student" placeholder="New Student Name"/>
                    <button type="submit">Add Student</button>
                </form>
            </div>
            <div>
                {studentsArray}
            </div>
        </div>
    )
}