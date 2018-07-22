/**
 * This contains the configurations required
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since 7/21/18
 */

const AVAILABLE_ENV = {
    DEV: Symbol('dev'),
    PROD: Symbol('prod')
};

const ENV = AVAILABLE_ENV.DEV;

const SERVER = {
    [AVAILABLE_ENV.DEV]: {
        protocol: 'https',
        ip: '127.0.0.1',
        port: '8000',
        path: 'api'
    },
    [AVAILABLE_ENV.PROD]: {}
};

SERVER.getURL = function () {
    const conf = SERVER[ENV];
    return `${conf.protocol}://${conf.ip}:${conf.port}${conf.path ? '/' + conf.path : ''}`;
};

export { SERVER };