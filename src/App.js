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
    super(props);
    this.state= {
      AddRows:0,
      AddColumns: 0,
      columns: 0,
      rows: 0,
      update: false,
      click: 1,
    };
    this.clearStates = this.clearStates.bind(this);
  }
  
  
  updateTable = () => {
    
    if(this.state.click === 1){
      this.clearStates();
      ReactDOM.unmountComponentAtNode(document.getElementById("table-container"));     
      this.setState({click: 2}, this.generateTable);
      
    }
    else if(this.state.click === 2){      
    
      ReactDOM.render((<Table columns={this.state.columns} rows={this.state.rows}/>),
      document.getElementById("table-container")); 
      this.setState({click: 1});      
    }
    
    
    
  }
  
  changeStates = () =>{
    if(this.state.rows > 0 || this.state.columns > 0)
    {
      this.setState({update: true});
    }
    else{
      this.setState({update: false});
    }
    
    this.setState({columns: Number(this.state.columns)+ Number(this.state.AddColumns),
      rows: Number(this.state.rows) + Number(this.state.AddRows)}, 
      this.generateTable);        
  }

  generateTable = () =>{        
    if(!this.state.update)
    {
      ReactDOM.render((<Table columns={this.state.columns} rows={this.state.rows}/>),
      document.getElementById("table-container")); 
    }
    else{
      this.updateTable();
    }
     
  }
  
  clearStates() {    
    let cellsDelete = document.getElementsByClassName("table-cell");
    let rowsDelete = document.getElementsByClassName("row");
    let tableDelete = document.getElementsByClassName("table");
    let tableContainerDelete = document.getElementsByClassName("table-container");

    let numOfCells = cellsDelete.length;
    let numOfRows = rowsDelete.length;
    let numOfTables = tableDelete.length;
    let numOfContTable = tableContainerDelete.length;

    for(let i = numOfCells - 1; i >= 0; i--)
    {
      ReactDOM.unmountComponentAtNode(cellsDelete[i]);
    }

    for(let i = numOfRows - 1; i >= 0; i--)
    {
      ReactDOM.unmountComponentAtNode(rowsDelete[i]);
    }

    for(let i = numOfTables - 1; i >= 0; i--)
    {
      ReactDOM.unmountComponentAtNode(tableDelete[i]);
    }

    for(let i = numOfContTable - 1; i >= 0; i--)
    {
      ReactDOM.unmountComponentAtNode(tableContainerDelete[i]);
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
        <div><p>Choose number of Rows to be added</p><input type="text" name="AddRows" onChange={this.handleChange}></input></div>
        <div><p>Choose number of Columns to be added</p><input type="text" name="AddColumns" onChange={this.handleChange}></input></div>
        <div>
        <button 
            className="button-add"
            onClick={() => {                 
                      this.changeStates();                                                 
            }}>
              GENERATE                    
            </button>            
        </div>
        
        <div id="table-container">          
        </div>
      </>
      
    );
  }
}

export default App;
