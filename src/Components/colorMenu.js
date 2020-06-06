import React, { Component } from "react";
import axios from "axios";

class ColorMenu extends Component {
    constructor(props){
        super(props);
        this.state={
            show: true,
        };
     }
 
 render(){
     return(
        <select name="color" onchange="">
        <option value="">-------</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="purple">Purple</option>
        </select>
     );
     
   }
}



export default ColorMenu;
