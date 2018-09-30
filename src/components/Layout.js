import React, { Component } from 'react';

import TermList from './TermList';
import Output from './Output';

class Layout extends Component {
    constructor() {
        this.state = {
            input: true,
        }
    }

    render() {
        if(this.state.input) return <TermList />
        else return <Output />
    }
}

export default Layout;