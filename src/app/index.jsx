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
import Content from './components/content.jsx';
import Title from './components/title.jsx';

// Importing CSS
import bootstrap from './stylesheets/assets/plugins/boostrap/css/bootstrap.css';
import fontAwesome from './stylesheets/assets/plugins/font-awesome/css/font-awesome.css';
import pages from './stylesheets/pages/css/pages.css';
import styles from './stylesheets/assets/less/style.less';

const loadedStates = ['complete', 'loaded', 'interactive'];

class MainContent extends React.Component {
    render () {
        return (
            <Container className="full-height full-width">
                <Header className="padding-10">
                    <Title orientation="left" value="undefined"/>
                </Header>
                <Content className="middle-content"/>
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