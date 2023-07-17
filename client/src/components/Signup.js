import React,{useState} from "react";
import {NavLink,useNavigate} from 'react-router-dom';
import PersonIcon from "@material-ui/icons/Person";
import signpic from '../images/Laws-related-to-registration-of-property-transactions-in-India-FB-1200x725-compressed.jpg';
import '../styles/Signup.css';
import Footer from'../components/Footer';
import EmailIcon from '@material-ui/icons/Email';
import PasswordIcon from '@material-ui/icons/NoEncryption';
import PhoneIcon from '@material-ui/icons/Phone';



const Signup = () => {
   const navigate=useNavigate();
    const [user,setUser]=useState({
    firstname:"",lastname:"",email:"",gender:"",phone:"",age:"",password:"",cpassword:""
     })
     let name,value;
     const handleInputs=(e)=>{
       console.log(e);
         name=e.target.name;
         value=e.target.value
          
         setUser({...user,[name]:value})
      }

      const PostData=async(e)=>{
         e.preventDefault();

         const {firstname,lastname,email,gender,phone,age,password,cpassword}=user;
        const res=await fetch("/register",{
         method:"POST",
         headers:{
           "Content-Type":"application/json"
         },
         body:JSON.stringify({
           firstname,lastname,email,gender,phone,age,password,cpassword
         })
        });

        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const emailcheck=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        const data=await res.json();
        if(res.status===422||!data){
           window.alert("please fill the data");
           console.log("Invalid registration");

        }
        else if(firstname.length<2||firstname.length>20){
          window.alert("length of firstname should be in between 2 to 20 characters");
        }
        else if(specialChars.test(firstname)||/\d/.test(firstname)){
          window.alert("firstname should not have any special character or number");
        }
        else if(lastname.length<2||lastname.length>20){
          window.alert("length of lastname should be in between 2 to 20 characters");
        }
        else if(specialChars.test(lastname)||/\d/.test(lastname)){
          window.alert("lastname should not have any special character or number");
        }
        else if(!emailcheck.test(email)){
           window.alert("Invalid email");
        }
        else if(!(gender=="Male"||gender=="male"||gender=="Female"||gender=="female"||gender=="Other"||gender=="other")){
          window.alert("Invalid Gender " +`${gender}`);
        }
        else if(phone.length!=10){
          window.alert("Enter 10 digit Mobile number");
        }
        else if(age<=0||age>120){
          window.alert("Invalid Age");
        }
        else if(res.status===401){
          window.alert("password must be same");
        }
      else if(res.status===400){
        window.alert("Email already exist");
      }
      
        else{
        window.alert("registrtion successful");
           console.log("registration success");

           navigate("/login");
       }
      }
  return (
    <>
    <div className="bod2">
      {/* <section className="signup"> */}
        <div className="container mt-5 signupbox" >
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>

              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="firstname">
                    <PersonIcon />
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    autoComplete="off"
                    minLength="3" maxLength="12"
                    value={user.firstname}
                    onChange={handleInputs}
                    placeholder="Your name"

                   
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastname">
                    <PersonIcon />
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    autoComplete="off"
                    value={user.lastname}
                    onChange={handleInputs}
                    placeholder="Your last name"
                   
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <EmailIcon />
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="example@domain.com"
                   
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="gender">
                    <PersonIcon />
                  </label>
                  <input
                    type="text"
                    name="gender"
                    id="gender"
                    autoComplete="off"
                    value={user.gender}
                    onChange={handleInputs}
                    placeholder="Male/Female/Other"
                   
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">  <PhoneIcon /></label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="Your phone"
                    
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="age">
                    <PersonIcon />
                  </label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    autoComplete="off"
                    value={user.age}
                    onChange={handleInputs}
                    placeholder="Your age"
                    
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
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Your password"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <PasswordIcon />
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder=" confirm Your password"
                    required
                  />
                </div>

                <div className="form-group form-button">
                  <input type="submit" name="signup" id="signup" className="form-submit" value="register" onClick={PostData}/>

                </div>
              </form>
              </div>
              
              <div className="signup-image">
                <figure>
                   <img src={signpic} alt="registration" width={340} height={400}/>
                </figure>
                <NavLink to="/login" className="signup-image-link">I am already registered</NavLink>

               </div>
          
          </div>
        </div>
      {/* </section> */}
    </div>
      <Footer/>
    </>
  );
};

export default Signup;
