import React, { Component } from 'react';
import Noty from 'noty'

import './css/App.css';
import './css/noty.css'
import './css/bootstrap-v4.css'

class App extends Component {
  showSuccess(){
    new Noty({
      type:"success",
      theme:"bootstrap-v4",
      layout:"topLeft",
      text:"Some Notification text...",
      timeout:"3000"
    }).show()
  }
 showError(){
    new Noty({
      type:"error",
      theme:"bootstrap-v4",
      layout:"topLeft",
      text:"Some Notification text...",
      timeout:"3000"
    }).show()
  }
  showInfo(){
    new Noty({
      type:"info",
      theme:"bootstrap-v4",
      layout:"topLeft",
      text:"Some Notification text...",
      timeout:"3000"
    }).show()
  }
  showWarning(){
    new Noty({
      type:"warning",
      theme:"bootstrap-v4",
      layout:"topLeft",
      text:"Some Notification text...",
      timeout:"3000"
    }).show()
  }

  render() {
    return (
      <div className="App">
      <button class="success" onClick={(e)=>this.showSuccess(e)}><span>Success</span></button>
      <button class="error" onClick={(e)=>this.showError(e)}><span>Error</span></button>
      <button class="info" onClick={(e)=>this.showInfo(e)}><span>Info</span></button>
      <button class="warning" onClick={(e)=>this.showWarning(e)}><span>Warning</span></button>
      </div>
    ); 
  }
}

export default App;
