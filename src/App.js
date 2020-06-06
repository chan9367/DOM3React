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
      AddRows:0,
      AddColumns: 0,
      columns: "",
      rows: "",
    }
  }
  
  
  changeStates = () =>{
    
    this.setState({columns: Number(this.state.columns)+ Number(this.state.AddColumns)}, 
      this.setState({rows: Number(this.state.rows) + Number(this.state.AddRows)}, this.generateTable));        
  }

  generateTable = () =>{
    ReactDOM.unmountComponentAtNode(document.getElementsByClassName("table-container")[0]);
    ReactDOM.render((<Table columns={this.state.columns} rows={this.state.rows}/>),
        document.getElementsByClassName("table-container")[0]);  
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
        <div className="table-container">          
        </div>
      </>
      
    );
  }
}

export default App;
