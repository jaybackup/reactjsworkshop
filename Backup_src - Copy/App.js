import logo from './logo.svg';
import './App.css';
import CompoNameAnything from "./imageCompo" 
import OtherCompo from "./Kaipan.jsx" 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        5+5 = {5+5}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Data</h2>
        <OtherCompo></OtherCompo>
        <CompoNameAnything/>
        <CompoNameAnything/>
        <CompoNameAnything/>
        <CompoNameAnything/>
        <CompoNameAnything/>
        user name
        username
        userName
        UserName


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
