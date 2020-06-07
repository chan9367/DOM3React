import React, { Component } from "react";

class TableCell extends Component {
    constructor(props){
        super(props);
        this.state={            
            color: this.props.color,
        };
     }
 

    changeColor = (event) =>{
        this.setState({color: this.props.color});
        event.target.style.backgroundColor = this.props.color;
        console.log("you clicked: "+this.props.color);
    }

    render(){
        return(
            <table>
                <tbody>
                    <tr>
                        <td style={{background: "white"}} className="table-cell" onClick={this.changeColor}></td>
                    </tr>
                    
                </tbody>
            </table>
            
            
        )     
    }
}



export default TableCell;