import React from "react"
import ReactDOM from "react-dom/client"



import "./style.css"
import Navbar from "./components/Navbar.js"
import SearchBar from "./components/search.js"
import Products from "./components/Products.js"
import About  from "./components/About.js"
import Footer from "./components/Footer.js"




import { Component } from "react"

const root = ReactDOM.createRoot(document.getElementById("root"))





root.render(
  <div>
    <Navbar></Navbar>
    <SearchBar></SearchBar>
    <Products></Products>
    <About></About>
    <Footer></Footer>
  </div>)






