import React, { Component } from 'react';
import './App.css';
import TableRow from './Components/TableRow.js';
import TableCell from './Components/TableCell.js';
import clickColor from './Components/clickColor.js';
import Table from './Components/Table.js';
import ColorMenu from "./Components/colorMenu.js";
import ReactDOM from 'react-dom';



class App extends Component {

  constructor(props){
    super(props)
    this.state= {
      columns: 3,
      rows: 1,
    }
  }
  
  
  addNewCell = () =>{
    let output = [];

    
    for(let i = 0; i < this.state.rows; i++)
    {
     //create new row.
     //row -> function amout

    }

    ReactDOM.render((output),
      document.getElementsByClassName("row")[0]);

  }

  render(){
    return (
      <>
        <div>
          <ColorMenu/>          
        </div>
        <div>
        <button 
            className="button-add"
            onClick={() => {                 
                      this.addNewCell();                                                 
            }}>
              ADD                    
            </button>
        </div>
        <div className="table">
          <div className="row">
            <TableCell/>
          </div>
        </div>
      </>
      
    );
  }
}
export default App;