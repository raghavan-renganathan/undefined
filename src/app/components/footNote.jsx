/**
 * Created by raghavan on 9/6/17.
 * @description: FootNote
 */
import React from 'react';

class FootNote extends React.Component {
    render () {
        return (
            <span className={`text-${this.props.orientation}`}>
                <h6>
                    {this.props.value}
                </h6>
            </span>
        );
    }
}

export default FootNote;