import React, { Component } from 'react';
import './App.css';
import addRow from './Components/addRow.js';
import addColumn from './Components/addColumn.js';
import clickColor from './Components/clickColor.js';
import ColorMenu from './Components/ColorMenu.js';


class App extends Component {
  render(){
    return (
      
      <div>
        <ColorMenu />
        
      </div>
      
    )
  }
}
export default App;