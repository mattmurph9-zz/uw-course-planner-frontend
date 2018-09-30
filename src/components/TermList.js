import React, { Component } from 'react';
import '../css/TermList.css'

import Term from './Term';
import DesiredElectives from './DesiredElectives';

class TermList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            terms: ['W2019', 'S2019', 'F2019',
                    'W2020', 'S2020', 'F2020',
                    'W2021', 'S2021', 'F2021',
                    'W2022', 'S2022', 'F2022'],
            electives: [],
            termCourses: {
                "W2019": [],
                "S2019": [],
                "F2019": [],
                "W2020": [],
                "S2020": [],
                "F2020": [],
                "W2021": [],
                "S2021": [],
                "F2021": [],
                "W2022": [],
                "S2022": [],
                "F2022": []
            },
            termStatus: {
                "W2019": true,
                "S2019": true,
                "F2019": true,
                "W2020": true,
                "S2020": true,
                "F2020": true,
                "W2021": true,
                "S2021": true,
                "F2021": true,
                "W2022": true,
                "S2022": true,
                "F2022": true
            },
        };
    }

    renderTerms = () => {
        return this.state.terms.map(name => (
            <div>
                <Term
                    key={name}
                    name={name}
                    removeGreeting={this.removeGreeting}
                    addCourses={this.addCourses}
                    changeTermStatus={this.changeTermStatus}
                />
                <br />
            </div>
        ));
    }

    addCourses = (term, courses) => {
        let termCourses = this.state.termCourses;
        termCourses[term] = courses;
        this.setState({ termCourses });
    }

    addElectives = (courses) => {
        let electives = this.state.electives;
        electives = courses;
        this.setState({ electives });
    }

    changeTermStatus = (term, status) => {
        let termStatus = this.state.termStatus;
        termStatus[term] = status;
        this.setState({termStatus});
        console.log(termStatus);
    }

    addGreeting = (name) => {
        this.setState({terms: [...this.state.terms, name]});
    }

    removeGreeting = (removeTerm) => {
        const filteredTerms = this.state.terms.filter(term => {
          return term !== removeTerm;
        });
        this.setState({ terms: filteredTerms });
    }

    submit = () => {
        // make api call
        console.log('API call');
    }

    render() {
        return (
            <div className="HelloWorldList">
                <DesiredElectives addElectives={this.addElectives} />
                <button className="submit" onClick={this.submit}>Submit</button>
                <h4>Please enter known courses for each term, separated by a ';'</h4>
                {this.renderTerms()}
            </div>
        );
    }
}

export default TermList;