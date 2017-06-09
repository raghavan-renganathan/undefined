/**
 * Created by raghavan on 8/6/17.
 * @description: content
 */
import React from 'react';
import Container from '../layouts/container.jsx';
import Header from '../layouts/header.jsx';
import Pane from './pane.jsx';
import Image from './image.jsx';
import MenuContainer from '../layouts/menuContainer.jsx';
import MenuItem from '../items/menuItem.jsx';

class Content extends React.Component {
    render () {
        return (
            <Container className={this.props.className}>
                <Pane orientation="left" className="col-md-3 bg-white b-grey b-r">
                    <Header className="menu-header padding-10">
                        <Image containerClassName="avatar-image round" src="../images/avatar.png" height="40px" width="40px"/>
                        <MenuContainer orientation="horizontal">
                            <MenuItem type="fa fa-comments-o"/>
                            <MenuItem type="fa fa-cogs"/>
                        </MenuContainer>
                    </Header>
                </Pane>
                <Pane orientation="right" className="col-md-9 bg-master-light"/>
            </Container>
        );
    }
}

export default Content;