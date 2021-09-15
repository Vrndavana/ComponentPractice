import React, {Component} from 'react';

class NameChange extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name : 'First Last'
    }
  }
  render() {
  return (
   <div>
       <div>
         <label for="searchEmp">Search Person: </label>
         <input 
         type="text" 
         value={this.state.name} 
         id="searchEmp" 
         placeholder="Enter Person's Name" 
         onChange={event => this.setState({name: event.target.value})}
         /> 
        </div>


        {["John","Steve","Alen","Stephen",
         "Smith","Alex","Jack","Andy","Jacky"].map(item => {
            return <div>{item}</div>})}
    </div>
    );
  }
}
export default NameChange;