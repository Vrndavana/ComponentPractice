import React from 'react';
import {Link} from 'react-router-dom';


function S1() {

    return(

        <div>
           <nav>
             <Link to='/' id="sasd">             HOME             </Link>
             <Link to='/Projects' id="asd">      Projects         </Link>
            </nav>







            <nav>
             <Link to='/S2' id="sasd">           Step 2           </Link>
             <Link to='/S3' id="sasd">           Step 3           </Link>
            </nav>
        </div>
    )}
    export default S1;