/**
 * This file contains all the end points
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since 7/21/18
 */

import { SERVER } from './config';

const URL = SERVER.getURL();

export const END_POINT = {
    login: URL + '/login',
    logout: URL + '/logout'
};