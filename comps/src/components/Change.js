import React, {Component} from 'react';
 
class ChangeColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
             color : '#4cb96b' };
    }
 
    clickEffect()
    {
        if (this.state.color === '#4cb96b')
            this.setState({ color : '#aaa' });
        else
            this.setState({ color : '#4cb96b' });    
    }
 
    render()
    {
        return <h1 style = { this.state }
                   onClick = {this.clickEffect.bind(this)}>
               {this.props.title} </h1>
  }
} 

export default ChangeColor;

{/* <h1> {this.props.title} </h1> */}