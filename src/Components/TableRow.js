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

    componentDidMount(){

        let outputCells = [];

        for(let i = 0; i < this.state.cells; i++)
        {     
            outputCells.push(<TableCell/>);
        }
        
        ReactDOM.render((outputCells),
        document.getElementsByClassName("row")[this.state.rowNum]); 

    }

    render(){
        return(
            <div className={"row " + this.state.rowNum}></div>
        );
        
    }
}



export default TableRow;
