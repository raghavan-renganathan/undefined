/**
 * Created by raghavan on 9/6/17.
 * @description: menuItem
 */
import React from 'react';

class MenuItem extends React.Component {
    render () {
        return (
            <div className="menu-item">
                <button className="icon" title={this.props.title}>
                    <i className={this.props.type} />
                </button>
            </div>
        );
    }
}

export default MenuItem;