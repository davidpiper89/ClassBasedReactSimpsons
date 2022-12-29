import React, { Component } from 'react';


class Quote extends Component {
    render() { 
        return ( 
            <>    
            {this.props.item.quote}
            </>  
        );
    }
}
 
export default Quote ;