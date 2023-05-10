import React, { useState } from "react";
import ReactDOM from "react-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import './index.css';

const Listcomp =(props)=>{
    const[line, cutline] = useState(false);

    const cutIt =()=>{
        cutline(true);
    }
    
    return(
        <>
            <div className="todo_style">
            <span onClick={cutIt}><DeleteIcon className="deleteIcon"/></span>
            <li style = {{textDecoration: line?"line-through":"none"}}>{props.text}</li>
            </div>
        </>
    );
} 

export default Listcomp;