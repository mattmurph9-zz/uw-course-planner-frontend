import React, { Component } from 'react';

import TermList from './TermList';
import Output from './Output';

const termCourses = {
    "W2019": ['a', '1'],
    "S2019": ['b', '2'],
    "F2019": ['c'],
    "W2020": ['d'],
    "S2020": ['e'],
    "F2020": ['f', '3', '4'],
    "W2021": [],
    "S2021": ['g'],
    "F2021": ['h'],
    "W2022": [],
    "S2022": ['i'],
    "F2022": ['j', 'k']
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