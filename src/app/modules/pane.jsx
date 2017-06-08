/**
 * Created by raghavan on 8/6/17.
 * @description: pane
 */
import React from 'react';

class Pane extends React.Component {
    render () {
        let paneType = this.props.orientation === 'left' ? 'left-pane' : 'right-pane';
        return (
            <div className={`full-height ${paneType}`}>
                {this.props.children}
            </div>
        );
    }
}

export default Pane;