/**
 * This renders a input-field with form-control styles.
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since 7/4/18
 */

import React from 'react';
import PropTypes from 'prop-types';

class InputTextField extends React.PureComponent {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    className="form-control"
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    aria-describedby={`${this.props.id}_help`}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                    type={this.props.type || 'text'}
                />
            </div>
        );
    }
}

InputTextField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
};

export default InputTextField;