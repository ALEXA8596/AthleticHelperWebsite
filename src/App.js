import logo from './AthleticHelperLogo.png';
import './App.css';
import React from 'react';
import { search } from 'athleticnetwrapper';

function App() {

  // Function to search for a specific athlete
  function searchAthlete() {
    // Get the search bar element
    var searchBar = document.getElementById("searchBar");
    // Get the value of the search bar
    var searchValue = searchBar.value;
    // Log the value of the search bar
    console.log(searchValue);
  }
  return (
    <><div className="App">
      <header className="App-header">
        {/* Create Search Bar */}
        <div>
          <input id="searchBar" className="searchBar" type="text" placeholder="Search..." style={{ width: "300px", height: "40px" }} />
          {/* Create Search Button */}
          <button onClick={searchAthlete} style={{ height: "40px"}}>Search</button>
        </div>
        <br></br>
        <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
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
    </>
  );
}

export default App;
