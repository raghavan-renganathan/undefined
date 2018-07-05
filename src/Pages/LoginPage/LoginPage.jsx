/**
 * This renders the login page for the application
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since 7/3/18
 */

import React from 'react';
import IntroContent from "../../components/IntroContent/IntroContent";
import LoginForm from "../../components/LoginForm/LoginForm";

class LoginPage extends React.PureComponent {
    render() {
        return (
            <div className="login-page-container">
                <div className="arrange-left">
                    <IntroContent />
                </div>
                <div className="arrange-right">
                    <LoginForm />
                </div>
            </div>
        );
    }
}

export default LoginPage;