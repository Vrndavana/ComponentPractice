import React from 'react';
import Form from './Form'; 



class Tog extends React.Component {
    constructor () {
      super()
      this.state = {
        isHidden: true
      }
    }
    toggleHidden () {
      this.setState({
        isHidden: !this.state.isHidden
      })
    }
    
    render () {
      return (
        <div>
          <button onClick={this.toggleHidden.bind(this)} >
           {this.state.isToggleOn ? 'ON' : 'Menu'}
          </button>
          {!this.state.isHidden && <Child />}
        </div>
      )
    }
  }
  
  const Child = () => (
  <div className='modal'>
        <h1>Hello, World!</h1>
        <div> OOO </div>
        <Form/>
    </div>
  )
  

  export default Tog ;

//   const app = document.getElementById('app')
//   ReactDOM.render(Parent, app)