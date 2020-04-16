import React, { Component } from "react";

class Student extends Component {
  // state = {  }

  render() {
    const { studentname } = this.props.match.params;
    console.log(this.props);
    return (
      <div>
        <p>Student</p>
        <p>
          {`The student name is `} {studentname}
        </p>
        <p>
          {`The student name is `} {this.props.match.params.studentno}
        </p>
      </div>
    );
  }
}

export default Student;
