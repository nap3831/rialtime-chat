import React from 'react';
import logo from './logo.png';
import './App.css';
import InputData from './InputData'
import ListData from './ListData'
import firebase from 'firebase'
import { Config } from './Config.js'
firebase.initializeApp(Config)

export default class App extends React.Component {
  state = { listMsg: [] }

  constructor(props) {
    super(props)
    var that  = this;
    firebase.database().ref('message/').on('value', function(snapshot) {
      if(snapshot.val() != null) { 
         that.setState({
          listMsg:snapshot.val()
         })
       }
    });
  }

  onClickButtonHandlerData = (msg) => {
    const listMsgData = this.state.listMsg.concat({
      key: Math.random().toString().replace('.',''),
      message: msg
     })
    firebase.database().ref('message/').set(listMsgData);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="text-success">
            MEDIA TECH <span style={{ color: '#ff8c00' }}>@ KMUTT</span>
            <p>สงสัยอะไรถามได้เลยนะครับ เดี๋ยวพี่ตอบแบบเรียลไทม์เลย</p>
          </h3>
          <div className="container">
            <div className="row">

              <div className="col-12">
                <ListData listMsg = {this.state.listMsg}  />
                <div className="col-12">
                </div>
                <InputData  onClickButtonHandler = {this.onClickButtonHandlerData}
 />
              </div>
            </div>
          </div>


        </header>
      </div>
    );
  }
}

