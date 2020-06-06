import React, { Component } from 'react';
import './App.css';
import addRow from './Components/addRow.js';
import addColumn from './Components/addColumn.js';
import clickColor from './Components/clickColor.js';
import colorMenu from './Components/colorMenu.js';


class App extends Component {
  render(){
    return (
        <div>
          <select name="color" onchange="">
            <option value="">-------</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
          </select>
        </div>
      
    );
  }
}
export default App;