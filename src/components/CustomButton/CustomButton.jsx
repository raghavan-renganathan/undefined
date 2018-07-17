/**
 * This renders a custom button component that is themed based on the application
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since 7/15/18
 */

import React from 'react';
import PropTypes from 'prop-types';

import './CustomButton.css';

class CustomButton extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * The handler for the on click event which will be triggered on clicking the button
     * This will be used to call the handler function sent from the parent
     *
     * @param event {object} The React synthetic click event object
     * @private
     */
    _onClick(event) {

    }

    render() {
        return (
            <div className="custom-button-container">
                <button className={`btn btn-${this.props.type || 'primary'}`} onClick={this.props.onClick}>
                    {this.props.text}
                </button>
            </div>
        );
    }
}

CustomButton.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default CustomButton;
