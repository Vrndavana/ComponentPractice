import React, {Component} from 'react';

class TButton extends Component {
  constructor(props) {
    super(props)
    this.state = {textDisplay: false}
  }
    
  ToggleButton(){
    this.setState((currentState) => ({
    textDisplay: !currentState.textDisplay, 
    }));
  }

  handleClick() {
    this.setState(prevState => ({
    isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <button onClick={() => {this.ToggleButton() ;this.handleClick();} }>

         {this.state.isToggleOn ? 'ON' : 'OFF'}

       </button>
       <div> {!this.state.textDisplay && this.props.text}  </div>         
      </div>
    );
  }
}
  export default TButton;


  // <button onClick={this.handleClick}>
  // {this.state.isToggleOn ? 'ON' : 'OFF'}
  // {!this.state.textDisplay && this.props.text}
  // </button>
  // {greeting();waveHello();}