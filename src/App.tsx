import { useState } from 'react'
import Window from './components/Window'
import Header from './components/header'
import MainRec from './components/MainRec'
import Addlink from './components/Addlink'

import './App.css'
import SearchBar from './components/SearchBar'

function App() {


  return (
    <>
      <div>
        <Header />
        <SearchBar />
        <Addlink/>
      </div>
    </>
  );
}

export default App
