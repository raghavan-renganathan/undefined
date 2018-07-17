/**
 * This component is packed with various animation effects and error notifying styles
 * and can replace the traditional input element.
 *
 * @author Raghavan Renganathan <raghavan.renganathan@ahold.com>
 * @version 1.0
 * @since Fri Jul 06 2018
 */

import React from 'react';
import PropTypes from 'prop-types';

import './InputTextField.css';

class InputTextField extends React.PureComponent {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this._doPlaceholderShift = this._doPlaceholderShift.bind(this);
    }

    /**
     * This function is used by the parent component to force focus the element
     */
    focus() {
        this.input.current.focus();
    }

    /**
     * This function handles the animation effect of moving placeholder to title of a form element
     * when it is focused.
     * And at the same time removing the error indication if present.
     */
    _doPlaceholderShift() {
        this.input.current.focus();
    }

    render() {
        /* eslint-disable */
        return (
            <div className="form-group custom-input-component-container">
                <div className={`input-box ${this.props.value !== '' ? 'non-empty' : ''}`}>
                    <input
                        className={`form-item input-${this.props.name}`}
                        name={this.props.name}
                        value={this.props.value}
                        ref={this.input}
                        onChange={this.props.onChange}
                        type={this.props.type}
                        maxLength={this.props.maxLength}
                    />
                    <div className="placeholder-text" name={this.props.name} onClick={this._doPlaceholderShift}>
                        {this.props.label}
                    </div>
                </div>
                <div className={`underline-style ${this.props.invalid ? 'error' : ''}`} />
                <div className={`error-text ${this.props.invalid ? 'show' : ''}`}>
                    {this.props.errorText}
                </div>
            </div>
        );
        /* eslint-enable */
    }
}

InputTextField.defaultProps = {
    value: '',
    name: '',
    type: 'text',
    maxLength: '',
    onChange: () => {},
    label: '',
    invalid: false,
    errorText: '',
};

InputTextField.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'number']),
    maxLength: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    invalid: PropTypes.bool,
    errorText: PropTypes.string,
};

export default InputTextField;
