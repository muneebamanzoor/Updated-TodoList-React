import React, { useState } from "react";
import './index.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Listcomp from "./Listcomp";

const inCss = { color: 'white', backgroundColor: 'purple' };

const App = () => {
  const [itemname, updatename] = useState('');
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    updatename(event.target.value);
  }

  const btnClk = () => {
    setItems(prevItems => [...prevItems, itemname]);
    updatename('');
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br></br>
          <h1>To Do List</h1><br></br>
          <input
            type="text"
            placeholder="Enter item"
            value={itemname}
            onChange={itemEvent}
          />
          <Button className="btn" style={inCss} onClick={btnClk}><AddIcon /></Button>
          <ol>
            {items.map((val, index) => (
               <Listcomp key={index} text={val}/>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
