/**
 * Created by raghavan on 7/6/17.
 * @description: Entry file of the application
 */
import React from 'react';
import ReactDOM from 'react-dom';
const loadedStates = ['complete', 'loaded', 'interactive'];

class App extends React.Component {
    render () {
        return <h1>Hello World!</h1>;
    }
}

function initialize() {
    ReactDOM.render(<App/>, document.getElementById('__application-container__'));
}

if (loadedStates.includes(document.readyState) && document.body) {
    initialize();
} else {
    window.addEventListener('DOMContentLoaded', initialize, false);
}