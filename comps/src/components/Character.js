import React, {Component} from 'react';

class Char extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:'Guy',
          level:'1',
          health:'50'
        }  
    }



    render() {
    return <div>
                <div> 
                 {this.props.player}
                 <h5>{this.props.name}</h5>
                </div>  
           </div>

           
               
   
    }
}
export default Char;