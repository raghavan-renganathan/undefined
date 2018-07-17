/**
 * This renders the intro content required for the login page.
 *
 * @author Raghavan Renganathan <renganathan.raghavan@gmail.com>
 * @version 1.0
 * @since 7/3/18
 */

import React from 'react';
import PropTypes from 'prop-types';

import './IntroContent.css';

class IntroContent extends React.PureComponent {
    render() {
        return (
            <div className="intro-content-container">
                <div className="image-container">
                    <img src={this.props.src} alt='' />
                </div>
                <div className="main-content">
                    <content>{this.props.content}</content>
                </div>
                <div className="sub-content">
                    <content>{this.props.subContent}</content>
                </div>
            </div>
        );
    }
}

IntroContent.propTypes = {
  src: PropTypes.string.isRequired,
  content: PropTypes.string,
  subContent: PropTypes.string
};

export default IntroContent;
