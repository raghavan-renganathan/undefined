/**
 * Created by raghavan on 13/6/17.
 * @description: inputBox
 */

import React from 'react';

class InputBox extends React.Component {
    render () {
        return (
            <div className="form-group form-group-default">
                {this.props.label ?
                    <label>
                        {this.props.label}
                    </label> :
                    ""
                }
                <input className="form-control"
                       type={this.props.type}
                       name={this.props.name}
                       value={this.props.value}
                       placeholder={this.props.placeholder}
                       disabled={this.props.disabled}/>
            </div>
        );
    }
}

export default InputBox;