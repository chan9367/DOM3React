import React, { Component } from "react";
import TableRow from './TableRow.js';
import ReactDOM from 'react-dom';

class Table extends Component {
    

    constructor(props){
        super(props);
        this.state= {
            columns: this.props.columns,
            rows: this.props.rows,
            color: "",
          }
     }

     

    
    componentDidMount(){
        
        let outputRows = [];
        for(let i = 0; i < this.state.rows; i++)
        {   
            
            outputRows.push(<TableRow rowNum={i} columns={this.state.columns} currentColor={this.state.color} changeColor = {this.getColor}/>);
        }
        outputRows.push(<div className="end-table"></div>)
        ReactDOM.render((outputRows),
        document.getElementsByClassName("table")[0]);        

    }
    getColor = () => {
        return this.props.getColor();
    }

    
    
    render(){
        
        return(
            <>
       
                <div className="table">

                    
                </div>
            </>
        );
        
    }
    }



export default Table;