import React, { Component } from 'react';
import Noty from 'noty'
import GitHubButton from 'react-github-btn'
import GHCorner from 'react-gh-corner';
import styled from 'styled-components';
// import {Helmet} from "react-helmet";

import './css/App.css';
import './css/noty.css'
import './css/bootstrap-v4.css'

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <p className="github">
          <h1>React Notify</h1>
        </p>   

          <button class="success" onClick={(e)=>this.showSuccess(e)}><span>Success</span></button>
          <button class="error" onClick={(e)=>this.showError(e)}><span>Error</span></button>
          <button class="info" onClick={(e)=>this.showInfo(e)}><span>Info</span></button>
          <button class="warning" onClick={(e)=>this.showWarning(e)}><span>Warning</span></button>
      <GHCorner
      href="https://github.com/developerayo/react-notify"
      positon="top-right"
      bgColor="black"
      size={120}
      ariaLabel="View source on Github"/>
      <footer style={{marginTop: `160px`}}>
      <GitHubButton href="https://github.com/developerayo" data-size="large" aria-label="Follow @developerayo on GitHub">Follow @developerayo</GitHubButton> &nbsp;&nbsp;
      <GitHubButton href="https://github.com/developerayo/react-notify" data-size="large" data-show-count="true" aria-label="Star developerayo/react-notify on GitHub">Star</GitHubButton>&nbsp;&nbsp;
      <GitHubButton href="https://github.com/developerayo/react-notify/fork" data-size="large" aria-label="Fork developerayo/react-notify on GitHub">Fork</GitHubButton></footer>
    </div>  
    );
  }
  showSuccess(){
    new Noty({
      type:"success",
      theme:"bootstrap-v4",
      layout:"topLeft",
      text:"Notification Text Here....",
      timeout:"3000"
    }).show()
  }
 showError(){
    new Noty({
      type:"error",
      theme:"bootstrap-v4",
      layout:"topLeft",
      text:"Notification Text Here....",
      timeout:"3000"
    }).show()
  }
  showInfo(){
    new Noty({
      type:"info",
      theme:"bootstrap-v4",
      layout:"topLeft",
      text:"Notification Text Here....",
      timeout:"3000"
    }).show()
  }
  showWarning(){
    new Noty({
      type:"warning",
      theme:"bootstrap-v4",
      layout:"topLeft",
      text:"Notification Text Here....",
      timeout:"3000"
    }).show()
  }
}

export default App;
