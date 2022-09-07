import React from 'react';
import './App.css';
import {useState} from 'react'


import { Route, Routes } from 'react-router-dom';
import Home from './compoment/Home';
import Contactes from './compoment/Contactes';
import Navbare from './compoment/Navbare'
import NotFound from './compoment/NotFound'
import Profile from './compoment/Profile'
import Settings from './compoment/Settings'
import Product from './compoment/Product'


function App() {
  const[List,setList]=useState([
    {id:1,name:"prod1",desc:"description of hhhhhh product"},
    {id:2,name:"prod2",desc:"description of jbhv product2533"},
    {id:3,name:"prod3",desc:"description of productsrgsegQEgaE"},
  ])
  return (

    <div className="App">
      <Navbare></Navbare>
          <a href='/'>home</a>
          <a href='/contact'>contact</a>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contactes/>}/>
        <Route path='*'element={<NotFound/>}/>
        <Route path='/profile' element={<Profile/>}>
          <Route path='setting' element={<Settings/>}/>
        </Route>
        <Route path="/products" element={<Product prodlist={List}/>}/>
  
      </Routes>
    </div>
  );
}

export default App;
