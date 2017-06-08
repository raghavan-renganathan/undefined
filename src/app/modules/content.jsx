/**
 * Created by raghavan on 8/6/17.
 * @description: content
 */
import React from 'react';
import Container from '../layouts/container.jsx';
import Pane from './pane.jsx';

class Content extends React.Component {
    render () {
        return (
            <Container className={this.props.className}>
                <Pane orientation="left"/>
            </Container>
        );
    }
}

export default Content;