/**
 * Created by raghavan on 9/6/17.
 * @description: menuItem
 */
import React from 'react';

class MenuItem extends React.Component {
    render () {
        return (
            <div className="menu-item">
                <button className={`icon ${this.props.type}`} title={this.props.title}/>
            </div>
        );
    }
}

export default MenuItem;