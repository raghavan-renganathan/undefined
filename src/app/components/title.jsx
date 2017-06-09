/**
 * Created by raghavan on 9/6/17.
 * @description: title
 */
import React from 'react';

class Title extends React.Component {
    render () {
        return (
            <div className="title-container">
                <h2 className="title-text">
                    <span className={`text-${this.props.orientation}`}>
                        {this.props.value}
                    </span>
                </h2>
            </div>
        );
    }
}

export default Title;