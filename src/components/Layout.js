import React, { Component } from 'react';

import TermList from './TermList';
import Output from './Output';

const termCourses = {
    "W2019": ['cs113', 'cs123'],
    "S2019": [],
    "F2019": ['cs223'],
    "W2020": [],
    "S2020": ['cs333'],
    "F2020": [],
    "W2021": ['cs343', 'cs353'],
    "S2021": [],
    "F2021": ['cs454', 'cs466'],
    "W2022": [],
    "S2022": ['se444', 'se454', 'se555'],
    "F2022": []
};

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: true,
            termCourses: termCourses
        }
    }

    getCoursePlan = (termCourses, termStatus, electives) => {
        //api call
        this.setState({input: false});
    }

    returnToInput = () => {
        this.setState({ input: true });
    }

    render() {
        if(this.state.input) return <TermList getCoursePlan={this.getCoursePlan} />
        else return (
            <div>
                <button onClick={this.returnToInput}>Reset</button>
                <Output  termCourses={this.state.termCourses} />
            </div>
        )
    }
}

export default Layout;