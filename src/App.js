import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table.js';
import TableRow from './Components/TableRow.js';
import TableCell from './Components/TableCell.js';

import ReactDOM from 'react-dom';



class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      addRows:0,
      addColumns: 0,
      columns: 0,
      rows: 0,
      update: false,
      click: 1,

      color: "",

    };
    this.clearStates = this.clearStates.bind(this);
  }
  
  getColor = () =>{
    return this.state.color;
  }
  
  
  newUpdate = () =>{
    let cellsDelete = document.getElementsByClassName("table-cell");
    let rowsDelete = document.getElementsByClassName("row");
    let rowHolderDelete = document.getElementsByClassName("r-holder");
    let tableDelete = document.getElementsByClassName("table");
    let tableContainerDelete = document.getElementsByClassName("table-container");

    let numOfCells = cellsDelete.length;
    let numOfRows = rowsDelete.length;
    let numOfRHolders = rowHolderDelete.length;
    let numOfTables = tableDelete.length;
    let numOfContTable = tableContainerDelete.length;
    
    

    if(this.state.addRows < 0){      
      for(let i = Number(this.state.rows) + (-Number(this.state.addRows)) - 1; i > Number(this.state.rows) - 1; i--)
      {        
        ReactDOM.unmountComponentAtNode(rowsDelete[i]);   
        rowsDelete[i].remove();
        ReactDOM.unmountComponentAtNode(rowHolderDelete[i]);    
        rowHolderDelete[i].remove();

      }          
    }
    else if (this.state.addRows > 0){      
      let outputRows = [];
        for(let i = Number(this.state.rows) - Number(this.state.addRows); i < this.state.rows; i++)
        {               
            outputRows.push(<TableRow rowNum={i} columns={this.state.columns} currentColor={this.state.color} changeColor = {this.getColor}/>);
        }

        let el = document.createElement("span");
        document.getElementsByClassName("end-table")[0].parentNode.insertBefore(el,  document.getElementsByClassName("end-table")[0]);
        

        ReactDOM.render((outputRows),
        document.getElementsByTagName("span")[ document.getElementsByTagName("span").length-1]);         
    }

    if(this.state.addColumns < 0)
    {
      for(let i = 0; i < this.state.rows; i++)
      {
        let currentRow = document.getElementsByClassName("row " + i)[0];
        console.log("ROWS: " + document.getElementsByClassName("row " + i).length);
       


        for(let j = Number(this.state.columns) + (-Number(this.state.addColumns)) - 1; j > Number(this.state.columns) - 1; j--)
        {  
            let currentCell = document.getElementsByClassName("table-cell"+i+"-"+j)[0];
            ReactDOM.unmountComponentAtNode(currentCell);   
            currentCell.remove();
                       
          
        } 

      }
      
    }    
    else if (this.state.addColumns > 0) {
      for(let i = 0; i < this.state.rows; i++)
      {
        let currentRow = document.getElementsByClassName("row " + i)[0];
        let outputCells = [];
        console.log("ROWS: " + document.getElementsByClassName("row " + i).length);
        console.log("ENDROW: " + document.getElementsByClassName("end-row " + i).parentNode);
        for(let j = this.state.columns - this.state.addColumns; j < Number(this.state.columns); j++)
        {  
            console.log(i + " " + j);
            outputCells.push(<TableCell coordinate={i + "-" + j} 
            currentColor={"white"} 
            getTableColor={this.getColor}/>);          
        } 
        let el = document.createElement("section");

        console.log("ROW WHRE BREAKS:" + i);
        document.getElementsByClassName("end-row " + i)[0].parentNode.insertBefore(el,  document.getElementsByClassName("end-row " + i)[0]);
        

        ReactDOM.render((outputCells),
        currentRow.childNodes[currentRow.childNodes.length-2]);

      }

    }
    
  }


  updateTable = () => {
    this.newUpdate();
    /*
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
    
    */
  }
  
  changeStates = () =>{
    if(this.state.rows > 0 || this.state.columns > 0)
    {
      this.setState({update: true});
    }
    else{
      this.setState({update: false});
    }
    
    this.setState({columns: Number(this.state.columns) + Number(this.state.addColumns),
      rows: Number(this.state.rows) + Number(this.state.addRows)}, 
      this.generateTable);        
  }

  generateTable = () =>{        
    if(!this.state.update)
    {
      ReactDOM.render((<Table columns={this.state.columns} rows={this.state.rows} getColor ={this.getColor}/>),

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
    this.setState({color: event.target.value})    
  }

  render(){
    return (
      <>
        
        <div><p>(1) Choose number of Rows to be added</p><input type="text" name="addRows" onChange={this.handleChange}></input></div>
        <div><p>(2) Choose number of Columns to be added</p><input type="text" name="addColumns" onChange={this.handleChange}></input></div>

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
        <p>(5) Click on a cell after the table is generated to color it</p>
      </>
      
    );
  }
}

export default App;
