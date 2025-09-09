import { useState } from 'react'
import Window from './components/Window'
import Header from './components/header'
import MainRec from './components/MainRec'
import Addlink from './components/Addlink'
import Input from './components/Input'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {


  return (
    <>
      <div>
        <Header />
        <SearchBar />
        <Addlink />
        <div className="input">
          <Input text="Tag" /> <br />
          <Input text="Title"/> <br/>
          <Input text="Link"/>  <br/>
          <Input text="Description"/> <br/>
        </div>
        
      </div>
    </>
  );
}

export default App
