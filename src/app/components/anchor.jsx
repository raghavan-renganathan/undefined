/**
 * Created by raghavan on 13/6/17.
 * @description: anchor
 */

import React from 'react';

class Anchor extends React.Component {
    render () {
        return (
            <a href={this.props.href}>
                {this.props.children}
            </a>
        );
    }
}

export default Anchor;