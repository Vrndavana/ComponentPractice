import React from 'react';
// import Me from '../Images/Me.jpg';
import {Link} from 'react-router-dom';
// import {Nav} from '../Components/styled';
// import Projects from '../Components/Projects';

function Home() {

    return(

        <div>
           <nav>
             <Link to='/Projects' id="asd">      Projects         </Link>
            </nav>
            <h3>Click Projects for More Examples</h3>

        </div>
    )}
    export default Home;