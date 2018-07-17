/**
 * This renders the login page for the application
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since 7/3/18
 */

import React from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";

class LoginPage extends React.PureComponent {

    constructor(props) {
        super(props);

        this.doLogin = this.doLogin.bind(this);
    }

    /**
     * This function logs in the user with the credentials passed.
     * If the credentials are valid, this will route the user to next page
     *
     * @param {string} username The username/email of the user
     * @param {string} password The password of the user
     */
    doLogin(username, password) {

    }

    render() {
        return (
            <div className="login-page-container">
                <LoginForm onFormSubmit={this.doLogin}/>
            </div>
        );
    }
}

export default LoginPage;