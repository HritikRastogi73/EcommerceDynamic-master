import React,{createContext,useReducer} from 'react'
import {Route,Routes,Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';

import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import ErrorPage from './components/ErrorPage';
import Logout from './components/Logout';
import Products from './components/Products';
import Cart from './components/Cart'
import './App.css';



import { initialState,reducer } from './reducer/UseReducer';

export const UserContext=createContext();
const App = () => {
   const [state,dispatch]=useReducer(reducer,initialState)

   
  return(
    <>
      <UserContext.Provider value={{state,dispatch}}>


      <Navbar/>
      <Routes>

<Route exact path="/" element={<Home/>}/>
  
<Route path="/about" element={<About/>}/>
  
<Route path="/contact" element={<Contact/>}/>
  
<Route path="/login" element={<Login/>}/>
  
<Route path="/signup" element={<Signup/>}/>

<Route path="/products" element={<Products/>}/>

<Route path="/logout" element={<Logout/>}/>


<Route path="/cart" element={<Cart/>}/>
  

<Route path="*" element={<ErrorPage/>}/>
  


</Routes>

      </UserContext.Provider>
     
     

    
    </>
  )
}

export default App;