import React, { Component } from "react";

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