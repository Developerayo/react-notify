import React, { Component } from 'react';
import Noty from 'noty'

import './App.css';
import './noty.css'
import './bootstrap-v4.css'
import './animate.css'
// import '../node/modules/noty/lib/themes/mint.css'

// import '../node/modules/noty/lib/themes/bootstrap-v4.css'

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
  // showButtonBounce(){
  // new Noty({
  //   text: 'Some Notifcation text',
  //   animation: {
  //       open: 'animated bounceInRight', // Animate.css class names
  //       close: 'animated bounceOutRight' // Animate.css class names
  //   }
  //   }).show();
  // }

  render() {
    return (
      <div className="App">
       
      <button onClick={(e)=>this.showSuccess(e)}>Show Success Message</button>
      <button onClick={(e)=>this.showError(e)}>Show Error Message</button>
      <button onClick={(e)=>this.showInfo(e)}>Show Info Message</button>
      {/* <button onClick={(e)=>this.showButtonBounce(e)}>Show Info Message</button> */}
      </div>
    ); 
  }
}

export default App;
