import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import * as url from './constents/urls';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner url={url.trending}/>
        <RowPost urls={url.originals} title='Netflix Orginals'/>
        <RowPost urls={url.action} title='Action' small/>
        <RowPost urls={url.comedyMovies} title='Comedy' small/>
        <RowPost urls={url.horrorMovies} title='Horror' small/>
        <RowPost urls={url.romanceMovies} title='Romantic' small/>
        <RowPost urls={url.documentaries} title='Documentary' small/>
    </div>
  );
}

export default App;