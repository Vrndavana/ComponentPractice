// Step by Step for React Set up - https://www.notion.so/React-Set-up-6919d33cb85f4afb8482a403282f536b
// React Base App condenced
// Create Variables, Components, Ect under Function App ( Const ) 
// Render your variables and components under return ( <h1>Render Const<h1> ) 






import logo from './logo.svg';
import './App.css';

function App() {


  //  Array
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((number) => number * 2);
  // console.log(dnumbers);
  // console.log(doubled);





  return (

    <section>
      {/* // REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT   */}
      <div className="Label">REACT DEFAULT APP</div>   
      <div className="RApp">
      <header className="RApp-header">
        <p> Edit src/App.js and save to reload. </p>
        <img src={logo} className="RApp-logo" alt="Rlogo" />
        <a className="RApp-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
      </header>
      </div>
      { /*  REACT REACT REACT  */}


      {/* ARRAY*/}
      <div className="Label"> Const  Rendering </div> 
      <div className="RApp"> 
       <h1>Array</h1>
       <h4>Const</h4>
       <p> Under Function App()</p>
       <p> const numbers = [1, 2, 3, 4, 5]; </p>
       <h4>Return</h4>
       <p> Under return</p>
       <p> put *numbers* in curly brackets to render {numbers}  </p>
       <h5>{numbers}</h5>
       <p>{doubled}</p>
      </div>

      
      {/* ARRAY*/}
      <div className="Label"> Const  Rendering </div> 
      <div className="RApp"> 
       <h1>Array</h1>
       <h5>{numbers}</h5>
       <p>{doubled}</p>
      </div>

  





    </section>
  );
}

export default App;
