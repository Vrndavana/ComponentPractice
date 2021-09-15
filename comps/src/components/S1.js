import React, {useState} from "react";
import {Link} from 'react-router-dom';



const S1 = () => {
const [value, setValue] = useState(1);
    return (
        <div>
        <nav>
         <Link to='/' id="sasd">             HOME             </Link>
         <Link to='/Projects' id="asd">      Projects         </Link>
        </nav>
        <div>
        <p> This example shows how STATE, is saved and updated. Inscrea the number</p> <h3> {value} </h3> 
        <button onClick={() => setValue((value + 1))}>Increment Value</button>
        </div>
        <nav>
         <Link to='/S2' id="sasd">           Step 2           </Link>
         <Link to='/S3' id="sasd">           Step 3           </Link>
        </nav>


        </div>
    );
};
export default S1;





    