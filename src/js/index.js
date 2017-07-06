import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

export default class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div>Hello World!</div>
        );
    }

}
ReactDOM.render(<MyComponent />, document.getElementById("myDiv"));
