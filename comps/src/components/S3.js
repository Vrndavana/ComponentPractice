import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Char from './Character';



function S3()  {

  

    return (
        <div>
            <nav>
             <Link to='/' id="sasd">             HOME             </Link>
             <Link to='/Projects' id="asd">      Projects         </Link>
            </nav>
            <div> 
                <Char player=''/>  

            </div>
        </div>
    )
}
   
export default S3;







// <nav>
//  <Link to='/S1' id="sasd">           Step 1           </Link>
//  <Link to='/S2' id="sasd">           Step 2           </Link>
// </nav>

    