import React, { Component } from 'react';

class Name extends Component {
    
    render() { 
        
        return (<>    
            {this.props.item.character}
            </>  );
    }
}
 
export default Name;