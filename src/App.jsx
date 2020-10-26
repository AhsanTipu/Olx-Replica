import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import ListCat from "./components/List.js"
import Cover from "./components/Cover"
import Cards from './components/Cards'
import Footera from './components/Footera'


function App() {
  return (
 <div>
   <Header />
   <ListCat />
   <Cover />
   <br />
   <br />

   <Cards />
   <Footera />
      </div>
 
    );
}

export default App;
