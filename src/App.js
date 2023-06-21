
import './App.css';
function AppHeader(){
  return (
    <div>
      <div className="App-nav">
        <div className='React' >
          <img src="logo192.png" className="App-logo"/>
          <p>ReactFacts</p>
        </div>
        <div >
          <p>React Course-Project 1</p>
        </div>
      </div>
      <h1> Fun Facts about React</h1>
    </div>
  )}
function Body() {
  return(
    <div className='Body'>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars in Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps,including mobile apps</li>
      </ul>
    </div>
  )
}
function Footer(){
  return(
    <div>
      <p><small>&copy; All Rights Reserved!</small></p>
    </div>
  )
}
function App(){
  return(
    <div className='App-header '>
    <AppHeader />
    <Body />
    <Footer/>
    </div>
  )
}

export default App;
