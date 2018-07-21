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
        this._onClick = this._onClick.bind(this);
    }

    /**
     * The handler for the on click event which will be triggered on clicking the button
     * This will be used to call the handler function sent from the parent
     *
     * @param event {object} The React synthetic click event object
     * @private
     */
    _onClick(event) {
        if (typeof this.props.onClick === 'function') {
            this.props.onClick(event);
        }
    }

    render() {
        return (
            <div className={`custom-button-container ${this.props.theme}`} role="button" onClick={this._onClick} >
                <div className="pseudo-button" />
                <content className="button-inner-text">
                    <span className={`${this.props.noMargin ? 'no-margin' : ''}`}>{this.props.text}</span>
                </content>
            </div>
        );
    }
}

CustomButton.defaultProps = {
    theme: 'default',
    text: '',
    noMargin: false
};

CustomButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    theme: PropTypes.string,
    noMargin: PropTypes.bool
};

export default CustomButton;
