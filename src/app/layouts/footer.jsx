/**
 * Created by raghavan on 8/6/17.
 * @description: footer
 */
import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <div className="footer full-width">
                <span className="pull-right">
                    {this.props.value}
                    {this.props.children}
                </span>
            </div>
        )
    }
}

export default Footer;