import React, { Component } from "react";

class TableCell extends Component {
    constructor(props){
        super(props);

        this.state={    
            coordinate: this.props.coordinate,        
            color: "white",            

        };
     }
 

    changeColor = () =>{
        
        this.setState({
            color: this.props.getTableColor(),            
        });

    }

    render(){
        return(

            <div className={"table-cell"+this.state.coordinate} >
                <table>
                    <tbody>
                        <tr>
                            <td key={this.props.color} style={{background: this.state.color}} className={"cell " + this.state.coordinate} onClick={e => this.changeColor()}></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            

            
            
        )     
    }
}



export default TableCell;