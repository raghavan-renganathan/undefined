/**
 * Created by raghavan on 8/6/17.
 * @description: header
 */
import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <div className={"header full-width " + this.props.className || ""}>
                {this.props.value}
                {this.props.children}
            </div>
        )
    }
}

export default Header;