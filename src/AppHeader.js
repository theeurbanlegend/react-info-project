import React from "react"
import './App.css'
function AppHeader(){
  let Mode=React.useState(false)
   function ToggleMode(){
    console.log(Mode)
  }
    return (
      <div>
        <div className="App-nav">
          <div className='React' >
            <img src="logo192.png" className="App-logo"/>
            <div>
            <h3>ReactFacts</h3>
            </div>
            <div onClick={ToggleMode}className="ToggleButton">
              <h4>Dark</h4>
              <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
              </label>
              <h4>Light</h4>
            </div>
          </div>
        </div>
      </div>
    )}
 export default AppHeader 