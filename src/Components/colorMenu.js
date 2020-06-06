import React, { Component } from "react";

class ColorMenu extends Component {
    constructor(props){
        super(props);
        this.state={
            color: "",
        };
     }
 
handleColor = (event) => {
    this.setState({color: event.target.value})
}

 render(){
     return (
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
                {console.log("color: "+ this.state.color)}
            </select>
    </div>)
     
   }
}



export default ColorMenu;
