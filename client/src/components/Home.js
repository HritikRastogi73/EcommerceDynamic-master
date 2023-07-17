import React,{useEffect,useState} from 'react'
import '../App.css'
import {useNavigate} from 'react-router-dom';
import Footer from '../components/Footer'
import { Button } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


const Home = () => {
  
  const[userName,setUserName]=useState('');
  const[show,setShow]=useState(false);
  
  const userHomePage=async()=>{
    try{
        const res=await fetch('/getdata',{
          method:"GET",
          headers:{
              "Content-Type":"application/json"
          },
        });

        const data=await res.json();
        console.log(data);
        setUserName(data.firstname);
        setShow(true)

    }catch(err){
     console.log(err);
    
    }
  }
  
  const navigate=useNavigate();
  
  const loginornot=async()=>{
    try{
        const res=await fetch('/loginornot1',{
          method:"GET",
          headers:{
             Accept:"application/json",
             "Content-Type":"application/json"
          },
          credentials:"include"
        });
        const data=await res.json();
        console.log(data);
       
        if(!res.status===200){
          const error=new Error(res.error);
          throw error;
        }
       navigate('/products');
    }catch(err){
     alert("you are not logged in");
     navigate('/login');
    }
  }

  useEffect(()=>{
    userHomePage();
  },[]);

  return (
    <>

       <div className='head1'>
          <div className='mid1'>
            <h1 className='det pt-5'>Welcome</h1>
           
            <h1 className='det'>{userName}</h1>
            <h2 className='det'>{show?'happy to see u back':"Explore the beauty and brands"}</h2>
            <br/>
            <br/>
            <Button className="buy" style={{background:"white"}} onClick={loginornot}><h5 style={{fontWeight:"bold"}}>Buy Now</h5></Button>
          </div>

       </div>
       <Footer/>
    </>
  )
}

export default Home