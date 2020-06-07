import React, { Component } from "react";
import TableCell from './TableCell.js';
import ReactDOM from 'react-dom';

class TableRow extends Component {
    

    constructor(props){
        super(props);
        this.state={
            rowNum: this.props.rowNum,

            cells: this.props.columns,            

        };
     }

    

     getCurrentColor = () =>{         
         return this.props.changeColor(); 
     }

    componentDidMount(){

        let outputCells = [];

        for(let i = 0; i < this.state.cells; i++)
        {     

            outputCells.push(<TableCell coordinate={this.state.rowNum + "-" + i} currentColor={this.state.currentColor} getTableColor={this.getCurrentColor}/>);

        }
        outputCells.push(<div className={"end-row " + this.state.rowNum}></div>)
        ReactDOM.render((outputCells),
        document.getElementsByClassName("row")[this.state.rowNum]); 

    }

    render(){
        return(
            <div className={"r-holder " + this.state.rowNum}>
            <div key={this.props.currentColor} className={"row " + this.state.rowNum}></div>
            </div>
        );
        
    }
}



export default TableRow;