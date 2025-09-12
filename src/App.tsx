import { useState } from "react";

import Window from "./components/Window";
import Header from "./components/Header";
import MainRec from "./components/MainRec";

import Input from "./components/Input";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Button from "./components/Button";
import LinksTable from "./LinksTable";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>

      <div className="MySection">
       

       
        {/* <div className="input">
          <Input text="Tag" /> <br />
          <Input text="Title" /> <br />
          <Input text="Link" /> <br />
          <Input text="Description" /> <br />
        </div> */}
     
        <LinksTable />
      </div>
      <Footer/>
    </>
  );
}

export default App;
