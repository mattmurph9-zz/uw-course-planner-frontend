import React, { Component } from 'react';
import '../css/Output.css';

class Output extends Component {

    renderYear = year => {
        const termCourses = this.props.termCourses;
        console.log(termCourses['W2019']);
        return (
            <tr>
                <th>{year}</th>
                <td>
                    {termCourses['W'+ year].map(course => (
                        <div>{course}</div>
                    ))}
                </td>
                <td>
                    {termCourses['S'+ year].map(course => (
                        <div>{course}</div>
                    ))}
                </td>
                <td>
                    {termCourses['F'+ year].map(course => (
                        <div>{course}</div>
                    ))}
                </td>
            </tr>
        )
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Year\Term</th>
                        <th>Winter</th>
                        <th>Spring</th>
                        <th>Fall</th>
                    </tr>
                        {this.renderYear('2019')}
                        {this.renderYear('2020')}
                        {this.renderYear('2021')}
                        {this.renderYear('2022')}

                </table>
            </div>
        )
    }
}

export default Output;