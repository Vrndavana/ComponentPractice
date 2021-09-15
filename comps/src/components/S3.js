import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Char from './Character';
import ChangeColor from './Change';
import NameChange from './Name';




function S3()  {
    const [value, setValue] = useState(100);
    return (
        <div>
            <nav>
                <Link to='/' id="sasd">             HOME             </Link>
                <Link to='/Projects' id="asd">      Projects         </Link>
            </nav>
            <div> 
                <h1> {value} </h1>  
                <button onClick={() => setValue((value - 20))}>   Increment Value   </button>
                <div> <ChangeColor title="Changing Header OoO" />   -----   </div>  
                <div> <Char player='wtf'/>   Hmm   </div>
                <div>
                 <h3>Filter</h3>
                 <NameChange/>  
                </div>
               

            </div>
        </div>
    )
}
   
export default S3;







// <nav>
//  <Link to='/S1' id="sasd">           Step 1           </Link>
//  <Link to='/S2' id="sasd">           Step 2           </Link>
// </nav>

    