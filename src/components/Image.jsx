import React, { Component } from 'react';

class Image extends Component {
    
    render() { 
        return (
            
           <img src={this.props.item.image}></img> 
           
        );
    }
}
 
export default Image;