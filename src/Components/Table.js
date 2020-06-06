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
            
            outputRows.push(<TableRow rowNum={i} columns={this.state.columns}/>);
        }
        
        ReactDOM.render((outputRows),
        document.getElementsByClassName("table")[0]);        

    }

    handleColor = (event) => {
        this.setState({color: event.target.value})
        
    
    }
    
    render(){
        return(
            <>
        <div>
         <label>Choose a color: </label>
            <select name="color" onChange={this.handleColor}>
                <option value="">-------</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="purple">Purple</option>
            </select>
            {console.log(this.state.color)}
        </div>
                <div className="table">
                    
                </div>
            </>
        );
        
    }
    }



export default Table;