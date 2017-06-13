/**
 * Created by raghavan on 13/6/17.
 * @description: seperator
 */

import React from 'react';

class Separator extends React.Component {
    render () {
        const separatorStyle = {
            height: '1px',
            width: '80%',
            margin: '10px auto 10px auto'
        };
        return (
            <div className="b-b b-grey" style={separatorStyle}/>
        );
    }
}

export default Separator;