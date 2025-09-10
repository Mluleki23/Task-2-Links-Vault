import { useState } from "react";
import Nav from "./components/Nav";
import Window from "./components/Window";
import Header from "./components/Header";
import MainRec from "./components/MainRec";
import Addlink from "./components/Addlink";
import Input from "./components/Input";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Button from "./components/Button";



function App() {
  return (
    <>
      <Nav/>
      <div className="header">
        <Header />
        <div />

        <SearchBar />
      </div>
      <Addlink />
      <div className="input">
        <Input text="Tag" /> <br />
        <Input text="Title" /> <br />
        <Input text="Link" /> <br />
        <Input text="Description" /> <br />
      </div>
      <div className="button">
        <Button name="Save" colours="green" />
        <Button name="Cancel" colours="red"/>
      </div>
    </>
  );
}

export default App;
