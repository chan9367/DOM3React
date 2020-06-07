import React, { Component } from "react";

class TableCell extends Component {
    constructor(props){
        super(props);
        this.state={            
            color: "white",
        };
     }
 

    changeColor = () =>{
        this.setState({color: "red"});
    }

    render(){
        return(
            <table>
                <tbody>
                    <tr>
                        <td style={{background: this.state.color}} className="table-cell" onClick={e => this.changeColor()}></td>
                    </tr>
                    
                </tbody>
            </table>
            
            
        )     
    }
}



export default TableCell;