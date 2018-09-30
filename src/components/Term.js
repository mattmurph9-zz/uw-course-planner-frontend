import React, { Component } from 'react';
import '../css/Term.css';

class Term extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            courses: [],
            onCampus: true
        }
    }

    handleTextChange = (event) => {
        this.setState({ input: event.target.value });
    }

    handleRadioChange = (event) => {
        const status = (event.target.value === "oncampus")
        this.setState({ onCampus: status });
        this.props.changeTermStatus(this.props.name, status);
    }

    addCourses = () => {
        let input = this.state.input;
        input = input.replace(/\r?\n|\r/g, ''); // remove newlines
        input = input.replace(/ /g, ''); // remove spaces
        const newCourses = input.split(";");
        newCourses.pop();
        const courses = [...this.state.courses, ...newCourses];
        this.setState({ courses, input: '' });
        this.props.addCourses(this.props.name, courses);
    }

    renderCourses = () => {
        return (
            this.state.courses.map(course => (
                <h4 key={course}>{course}</h4>
            ))
        );
    }

    render() {
        const { courses, onCampus } = this.state;
        return (
            <div className="Term">
                <strong>{this.props.name}</strong>
                <br />
                { onCampus &&
                <div>
                    <textarea value={this.state.input} onChange={this.handleTextChange} />
                    <button className="add" onClick={this.addCourses}>
                        Add
                    </button>
                    <button className="clear" onClick={() => this.setState({courses: []})}>
                        Clear
                    </button>
                    { courses.length !== 0 &&
                        this.renderCourses()
                    }
                </div>
                }
                <div onChange={this.handleRadioChange}>
                    <input type="radio" value="oncampus" name={this.props.name} defaultChecked/> On Campus
                    <input type="radio" value="offcampus" name={this.props.name}/> Off Campus
                </div>
            </div>
        );
    }
}

export default Term;