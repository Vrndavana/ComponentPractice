// Step by Step for React Set up - https://www.notion.so/React-Set-up-6919d33cb85f4afb8482a403282f536b
// React Base App condenced
// Create Variables, Components, Ect under Function App ( Const ) 
// Render your variables and components under return ( <h1>Render Const<h1> ) 
// Follow Green comments under each Function and Return to see how each component is rendered




// Imports (Npm instal dependencies - Import them - Render )
import logo from './logo.svg';
import './App.css';
import React from 'react';
import MouseTracker from './components/Mouse';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import S1 from './components/S1';
import S2 from './components/S2';
import S3 from './components/S3';
function App() {


  //  Follow Along with Repo open to see Render 
  //  Array
  const numbers = [1, 2, 3, 4, 5];
  // const doubled = numbers.map((number) => number * 2);
  // console.log(dnumbers);
  // console.log(doubled);

  // ItemList
  const listItems = numbers.map((items)=><li>{items}</li>);





  return (
    
    <section>
      <MouseTracker/>
      <h1 className="Open">Follow Along with Repo open to See 'return' Render</h1>
      <h2 className="Open">Practicing the Basics</h2>
      {/* CONST*/}
      <div className="Label"> Const Rendering </div> 
      <div className="RApp"> 
        {/* Array */}
       <h1>Array</h1>
       <h4>Const</h4>
       <p> Under Function App()</p>
       <p> const numbers = [1, 2, 3, 4, 5]; </p>
       <h4>Render</h4>
       <p> Under return</p>
       <p> put a 'p' tag or header with *numbers* in curly brackets to render {numbers} </p>
       <h5>{numbers}</h5>
       {/* <p>{doubled}</p> */}
       {/* UL and LI */}
       <p> Using .map on the numbers array you can render them into a list, multiple, divide and much more  </p>
       <h1>Lists</h1>
       <h1>{listItems}</h1>
      </div>

      <div className="Label"> Dependencies, Imports, Initializing </div>
      <div className="RApp">
       <h1>Importing Components</h1>
       <p> set up Browser Router, by installing, importing, and initializing it</p>
       <p> check VSCode to see how BrowserRouter connected</p>
       <BrowserRouter>
        <Switch> 
          <Route exact path='/'>                <Home/>           </Route> 
          <Route exact path='/Projects'>        <Projects/>       </Route>  
          <Route exact path='/S1'>              <S1/>             </Route> 
          <Route exact path='/S2'>              <S2/>             </Route>
          <Route exact path='/S3'>              <S3/>             </Route>    
        </Switch>
      </BrowserRouter>
 
{/* Build a mini caraasel that shows a couple different components */}

      </div>

  





















      {/* // REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT REACT   */}
      <div className="Space">V</div>
      <div className="Label">REACT DEFAULT APP</div>   
      <div className="RApp">
      <header className="RApp-header">
        <p> Edit src/App.js and save to reload. </p>
        <img src={logo} className="RApp-logo" alt="Rlogo" />
        <a className="RApp-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
      </header>
      </div>
      { /*  REACT REACT REACT  */}    
    </section>
  );
}

export default App;
