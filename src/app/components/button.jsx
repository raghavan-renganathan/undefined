/**
 * Created by raghavan on 13/6/17.
 * @description: button
 */

import React from 'react';

class Button extends React.Component {
    render () {
        return (
            <button className={`btn btn-${this.props.size || ''} btn-${this.props.type || 'default'}`}
                    value={this.props.value}
                    disabled={this.props.disabled}
                    title={this.props.title}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;