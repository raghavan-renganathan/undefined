/**
 * Created by raghavan on 8/6/17.
 * @description: footer
 */
import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <div className="footer full-width">
                <p className="pull-right v-middle">
                    {this.props.value}
                </p>
            </div>
        )
    }
}

export default Footer;