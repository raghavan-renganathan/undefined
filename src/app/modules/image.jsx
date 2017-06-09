/**
 * Created by raghavan on 9/6/17.
 * @description: image
 */
import React from 'react';

class Image extends React.Component {
    render () {
        return (
            <div className={this.props.containerClassName}>
                <img src={this.props.src} className={this.props.className} height={this.props.height || '100px'} width={this.props.width || '100px'}/>
            </div>
        );
    }
}

export default Image;