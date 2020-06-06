import React, { Component } from "react";
import TableRow from './TableRow.js';
import ReactDOM from 'react-dom';

class Table extends Component {
    constructor(props){
        super(props);
        this.state= {
            columns: this.props.columns,
            rows: this.props.rows,
          }
     }

    componentDidMount(){
        
        let outputRows = [];
        for(let i = 0; i < this.state.rows; i++)
        {     
            
            outputRows.push(<TableRow rowNum={i} columns={this.state.columns}/>);
        }
        
        ReactDOM.render((outputRows),
        document.getElementsByClassName("table")[0]);        

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
