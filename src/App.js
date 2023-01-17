// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;


import React from 'react';

function GoogleCanadaHeader() {
  return (
    <div className="header">
      <Logo />
      <SearchBox />
      <SearchButtons />
      <LanguageNote />
    </div>
  );
}

function Logo() {
  return (
    <img src="https://citizenlab.ca/wp-content/webpc-passthru.php?src=https://citizenlab.ca/wp-content/uploads/2017/04/Google-Canada-Logo.jpg&nocache=1" alt="Google Canada logo" className="logo" />
  );
}

function SearchBox() {
  return (
    <div className="search-box">
      <input type="text" placeholder="Search" className="search-input" />
    </div>
  );
}

function SearchButtons() {
  return (
    <div className="search-buttons">
      <button  className="search-button" >Search</button>
      <button className="lucky-button">I'm Feeling Lucky</button>
    </div>
  );
}

function LanguageNote() {
  return <div className="language-note">Language: English </div>;
}

export default GoogleCanadaHeader;