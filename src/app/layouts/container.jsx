/**
 * Created by raghavan on 8/6/17.
 * @description: container
 */
import React from 'react';

class Container extends React.Component {
    render () {
        return (
            <div className={(this.props.className || "")}>
                {this.props.children}
            </div>
        );
    }
}

export default Container;