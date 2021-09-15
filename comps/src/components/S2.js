import React, {useState} from "react";
import {Link} from 'react-router-dom';


function S2()  {
    const [value, setValue] = useState(100);
        return (
            <div>
            <nav>
             <Link to='/' id="sasd">             HOME             </Link>
             <Link to='/Projects' id="asd">      Projects         </Link>
            </nav>
            <div>
             <p> This example shows how STATE, is saved and updated.</p> <h3> {value} </h3> 
             <button onClick={() => setValue((value + 1))}>Increment Value</button>
             <button onClick={() => setValue((value - 1))}>decrement Value</button>
             <button onClick={() => setValue((value == 0))}> Reset Value</button>
            </div>
            <nav>
             <Link to='/S1' id="sasd">           Step 1           </Link>
             <Link to='/S3' id="sasd">           Step 3           </Link>
            </nav>
    
    
            </div>
        );
    };
    export default S2;