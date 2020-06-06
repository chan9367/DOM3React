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
         <td className="table-cell"></td>
     )     
   }
}



export default TableCell;
