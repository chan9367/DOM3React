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
      columns: 20,
      rows: 20,
    }
  }
  
  
  addNewCell = () =>{
    let outputRow = [];
    console.log("Rows: "+this.state.rows);
    console.log("Columns: "+this.state.columns);
    
    for(let i = 0; i < this.state.rows; i++)
    {         
      outputRow.push(<div className= {"row " + i.toString()}></div>);
    }

    ReactDOM.render((outputRow),
      document.getElementsByClassName("table")[0]);

    
    let outputCells = [];

    for(let j = 0; j < this.state.columns; j++)
    {     
       outputCells.push(<TableCell/>);
    }

    for(let i = 0; i < this.state.rows; i++)
    {
      ReactDOM.render((outputCells),
      document.getElementsByClassName("row")[i]);  

    }    
    
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });

  }

  render(){
    return (
      <>
        <div>
          <ColorMenu/>          
        </div>
        <div><p>Choose number of Rows to be added</p><input type="text" name="rows" onChange={this.handleChange}></input></div>
        <div><p>Choose number of Columns to be added</p><input type="text" name="columns" onChange={this.handleChange}></input></div>
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
          
        </div>
      </>
      
    );
  }
}

export default App;