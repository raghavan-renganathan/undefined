/**
 * Created by raghavan on 9/6/17.
 * @description: menuContainer
 */
import React from 'react';

class MenuContainer extends React.Component {
    render () {
        let calculatedClassList = `menu ${this.props.orientation === 'horizontal' ? 'menu-horizontal' : 'menu-vertical'}`;
        return (
            <div className={calculatedClassList}>
                <span>
                    {this.props.children}
                </span>
            </div>
        );
    }
}

export default MenuContainer;