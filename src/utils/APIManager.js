/**
 * This contains the API calls
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since 7/21/18
 */

import { END_POINT } from '../config/RESTEndPoints';

export const APIs = {

    /**
     * This create a REST call to the login endpoint
     *
     * @param username {string} The username provided by the user
     * @param password {string} The password provided by the user
     * @returns {Promise} The promise object that resolves to the response
     * @throws {Error}
     */
    login: (username, password) => {
        const data = {
            username,
            password
        };
        return fetch(END_POINT.login, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json());
    },

    /**
     * This create a REST call to the logout endpoint
     *
     * @returns {Promise} The promise object that resolves to the response
     * @throws {Error}
     */
    logout: () => {
        return fetch(END_POINT.logout, {
            method: 'POST'
        })
            .then(response => response.json());
    }
};