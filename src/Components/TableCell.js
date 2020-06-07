import React, { Component } from "react";
import axios from "axios";
import "./style.css"

class TableCell extends Component {
    constructor(props){
        super(props);
        this.state={            
            color: "",
        };
     }
 
 render(){
     return(
         <table>
            <tbody>
                <tr>
                    <td className="table-cell"></td>
                </tr>
                
            </tbody>
         </table>
         
         
     )     
   }
}



export default TableCell;
