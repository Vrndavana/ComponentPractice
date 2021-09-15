import React from 'react';
import {Link} from 'react-router-dom';


function S3() {

    return(

        <div>
           <nav>
             <Link to='/' id="sasd">             HOME             </Link>
             <Link to='/Projects' id="asd">      Projects         </Link>
            </nav>
            <div>  
             <h1>State</h1>
            </div>
            <nav>
             <Link to='/S1' id="sasd">           Step 1           </Link>
             <Link to='/S2' id="sasd">           Step 2           </Link>
            </nav>
        </div>
    )}
    export default S3;