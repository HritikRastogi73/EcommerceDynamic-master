import React,{useContext, useState} from 'react'
import loginpic from '../images/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg';
import {NavLink ,useNavigate} from 'react-router-dom';
import { UserContext } from '../App';
import Footer from '../components/Footer';
import '../styles/Login.css';
import PasswordIcon from '@material-ui/icons/NoEncryption';
import EmailIcon from '@material-ui/icons/Email'

const Login = () => {
  const {state,dispatch}=useContext(UserContext);
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const loginUser=async(e)=>{
          e.preventDefault();

          const res=await fetch('/signin',{
            method:"POST",
            headers:{
                   "Content-Type":"application/json"
            },
            body:JSON.stringify({
              email,password
            })
          })


          const data=res.json();

          if(res.status===400){
            window.alert("please fill the data");
          }
          else if(res.status===401){
            window.alert("Invalid credentials");
          }
          else{
            dispatch({type:'USER',payload:true})
            window.alert("Login successful")
            navigate('/');
          }
  }

  return (
    <>
       
       <div className='bod1'>
       <section className="signin">
        <div className="container mt-5 signinbox">
          <div className="signin-content">

          <div className="signin-image">
                <figure className='imag1'>
                   <img src={loginpic} alt="login" width={250} height={300}/>
                </figure>
                <NavLink to="/signup" className="signup-image-link">Create an Account</NavLink>

           </div>
          
            <div className="signin-form">
              <h2 className="form-title">Sign In</h2>

              <form method="POST" className="register-form" id="register-form">
            
                <div className="form-group">
                  <label htmlFor="email">
                    <EmailIcon />
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Your email"
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="password">
                    <PasswordIcon />
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Your password"
                  />
                </div>

                <div className="form-group form-button">
                  <input type="submit" name="signin" id="signin" className="form-submit" value="Login" onClick={loginUser}/>

                </div>
              </form>
              </div>
              <div className='side1'>
                  <div className='side2'>

                  <h1>LOGIN</h1>
                   <h3>Explore the beautiful world of shopping and fill your cart</h3>
                  </div>
                  
              </div>
             
          </div>
        </div>
      </section>
      <br/>
      <br/>
      </div>
      <Footer/>
    </>
  )
}

export default Login