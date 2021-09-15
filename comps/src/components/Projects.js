import React from 'react';
import {Link} from 'react-router-dom';


function Projects() {

    return(

        <div>
           <nav>
             <Link to='/' id="sasd">           HOME           </Link>
            </nav>

            <div>  
                <h1>State</h1>
            </div>

            <nav>
             <Link to='/S1' id="sasd">           Step 1           </Link> 
             <Link to='/S2' id="sasd">           Step 2           </Link>
             <Link to='/S3' id="sasd">           Step 3           </Link>
            </nav>
        </div>
    )}
    export default Projects;