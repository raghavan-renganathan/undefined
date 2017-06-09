/**
 * Created by raghavan on 7/6/17.
 * @description: Entry file of the application
 */
import React from 'react';
import ReactDOM from 'react-dom';

// Importing components
import Header from './layouts/header.jsx';
import Container from './layouts/container.jsx';
import Footer from './layouts/footer.jsx';
import Content from './modules/content.jsx';

// Importing CSS
import styles from './stylesheets/assets/css/style.css';
import helpers from './stylesheets/pages/css/pages.css';

const loadedStates = ['complete', 'loaded', 'interactive'];

class MainContent extends React.Component {
    render () {
        return (
            <Container className="full-height full-width">
                <Header value="Welcome to the undefined!"/>
                <Content className="p-t-60 p-l-20 p-b-20 full-height full-width"/>
                <Footer value="version 1.0"/>
            </Container>
        );
    }
}

function initialize() {
    ReactDOM.render(<MainContent/>, document.getElementById('__application-container__'));
}

if (loadedStates.includes(document.readyState) && document.body) {
    initialize();
} else {
    window.addEventListener('DOMContentLoaded', initialize, false);
}