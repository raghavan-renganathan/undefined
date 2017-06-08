/**
 * Created by raghavan on 8/6/17.
 * @description: header
 */
import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <div className="header full-width">
                {this.props.value}
            </div>
        )
    }
}

export default Header;