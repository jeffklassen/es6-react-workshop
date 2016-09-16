import React from 'react';
import { Link } from 'react-router';

export default class Thumbnail extends React.Component {
    render() {
        return (
            <div className="thumbnail-wrapper" onClick={() => {this.props.onThumbClick(this.props.id)}}>

                <img src={this.props.url} alt={this.props.title} />
                
                <span className="thumbnail-title">{this.props.title}</span>
               
            </div>
        );
    }
}


Thumbnail.propTypes = {
    url: React.propTypes.string.isRequired,
    title: React.propTypes.string.isRequired,
    id: React.PropTypes.oneOfType([
        //we'll let id be either a string or a number
        React.PropTypes.string,
        React.PropTypes.number
    ]).isRequired,
    onThumbClick: React.propTypes.func
};