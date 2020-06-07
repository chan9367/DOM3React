import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table.js';
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
      color:"",
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
      ReactDOM.render((<Table color={this.state.color} columns={this.state.columns} rows={this.state.rows}/>),
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
  handleColor = (event) => {
    this.setState({color: event.target.value});
    //add something to pass through the color?
}
  render(){
    return (
      <>
      
        <div><p>(1) Choose number of Rows to be added</p><input type="text" name="AddRows" onChange={this.handleChange}></input></div>
        <div><p> (2) Choose number of Columns to be added</p><input  type="text" name="AddColumns" onChange={this.handleChange}></input></div>
        <div>
        <div>
         <label> (3) Choose a color: </label>
            <select name="color" onChange={this.handleColor}>
                <option value="">-------</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="purple">Purple</option>
            </select>
            {console.log("current picked color: "+this.state.color)}

         
        </div>
        <p>(4) Click on the button to generate a table</p><button 
            className="button-add"
            onClick={() => {                 
                      this.changeStates();                                                 
            }}>
              GENERATE                    
            </button>            
        </div>
        
        <div id="table-container">          
        </div>
        <p>(5) Click on a cell after the table is generated</p>
      </>
      
    );
  }
}

export default App;