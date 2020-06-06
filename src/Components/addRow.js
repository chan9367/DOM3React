import React, { Component } from "react";

class AddRow extends Component {
    constructor(props){
        super(props);
        this.state={
            row: 0,
        };
     }
 
handleAddRow = () => {
    this.setState({row: this.state.row + 1});
    console.log(this.state.row);
}

 render(){
     
     return (
        <div>
            <button onClick={this.handleAddRow}>Add Row</button>
        </div>
        
     )
   }
}



export default AddRow;
