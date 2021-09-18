import React from 'react';
import {Link} from 'react-router-dom';
// import Tog from './Toggle';
import Tog from './Tog';


function Home() {

    return(

        <div>
           <nav>
             <Link to='/Projects' id="asd">      Projects         </Link>
            </nav>
            <h3>Click Projects for More Examples</h3>
            <div className="Label"> State </div>
            <h2>Toggle</h2>
            {/* <Tog text="Hello World!"/> */}
            <Tog/>
        </div>
    )}
    export default Home;