/**
 * Created by raghavan on 13/6/17.
 * @description: login.jsx
 */
import React from 'react';
import ReactDOM from 'react-dom';

// Importing components
import Container from './layouts/container.jsx';
import Image from './components/image.jsx';
import Button from './components/button.jsx';
import InputBox from './components/inputBox.jsx';
import Separator from './components/separator.jsx';
import Anchor from './components/anchor.jsx';

// Importing CSS
import bootstrap from './stylesheets/assets/plugins/boostrap/css/bootstrap.css';
import fontAwesome from './stylesheets/assets/plugins/font-awesome/css/font-awesome.css';
import pages from './stylesheets/pages/css/pages.css';
import styles from './stylesheets/assets/less/style.less';

const loadedStates = ['complete', 'loaded', 'interactive'];

class ProductLogo extends React.Component {
    render () {
        return (
            <Container className="product-logo col-md-10 no-float center-margin p-t-40 p-b-40">
                <Image src="../images/product-logo.svg" height="100px" width="100%"/>
            </Container>
        );
    }
}

class LoginOptions extends React.Component {
    render () {
        return (
            <Container className="m-t-60">
                <Container className="row full-width">
                    <Container className="col-md-4 no-float center-margin">
                        <InputBox label="Username" type="text" placeholder="Enter your email or username"/>
                        <InputBox label="Password" type="password" placeholder="Enter your password"/>
                        <Button size="cons" type="default">
                            Login
                        </Button>
                        or click <Anchor href="/register">here</Anchor> to register
                    </Container>
                </Container>
                <Separator/>
                <Container className="row full-width">
                    <Container className="col-md-4 no-float center-margin">
                        Or login using &nbsp;
                        <Button size="sm" type="complete">
                            Facebook
                        </Button>
                        &nbsp; or &nbsp;
                        <Button size="sm" type="danger">
                            Google
                        </Button>
                    </Container>
                </Container>
            </Container>
        );
    }
}

function initialize() {
    ReactDOM.render(<ProductLogo/>, document.getElementsByClassName('__product-logo-container__')[0]);
    ReactDOM.render(<LoginOptions/>, document.getElementsByClassName('__login-options__')[0]);
}

if (loadedStates.includes(document.readyState) && document.body) {
    initialize();
} else {
    window.addEventListener('DOMContentLoaded', initialize, false);
}