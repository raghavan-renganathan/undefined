/**
 * This will be the main component that will render view based on the location.
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since 7/3/18
 */

import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LoginPage from "../Pages/LoginPage/LoginPage";

const Router = () => (
    <BrowserRouter>
        <Route exact path="/login" component={LoginPage} />
    </BrowserRouter>
);

export default Router;
