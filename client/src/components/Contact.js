import React,{useEffect,useState} from 'react'
import { json } from 'react-router-dom';
import '../styles/Contact.css';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email'
import Footer from '../components/Footer';
import {useNavigate} from 'react-router-dom';


const Contact = () => {

  const [userData,setUserData]=useState({firstname:"",email:"",phone:"",message:""});
  const userContact=async()=>{
    try{

        const res=await fetch('/getdata',{
          method:"GET",
          headers:{
              "Content-Type":"application/json"
          },
        });

        const data=await res.json();
        console.log(data);
        setUserData({...userData,firstname:data.firstname,email:data.email,phone:data.phone});

        if(!res.status===200){
          const error=new Error(res.error);
          throw error;
        }
    }catch(err){
     console.log(err);
    }
  }

  useEffect(()=>{
    userContact();
  },[]);

  //storing data in states
  const handleInputs=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    
    setUserData({...userData,[name]:value})
  }

  const navigate=useNavigate();
  //send the data to backend
   const contactForm=async (e)=>{
    try{
    e.preventDefault();

    const {firstname,email,phone,message}=userData;

    const res=await fetch('/contact',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        firstname,email,phone,message
      })
    
    });
    const data= await res.json();
    if(res.status==200){
      window.alert("please fill message");
    }
    else{
      alert("Message sent");
      setUserData({...userData,message:""})
    }
  }catch{
    alert("please log in");
    navigate('/login');
  }
   }

  return (
    <>
    <div className='bod3'>
    <div className='contact-info'>
         <div className='container-fluid'>

              <div className='row'>
                <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
                   
                <div className='contact_info_item d-flex justify-content-start align-items-center'>
                     <PhoneIcon/>
                      <div className='contact_info_content'>
                       <div className='contact_info_title'>
                         Phone
                       </div>
                       <div className='contact_info_text'>
                         +91 1111 543 2198
                       </div>
                      </div>
                   </div>

                   <div className='contact_info_item d-flex justify-content-start align-items-center'>
                     <EmailIcon/>
                      <div className='contact_info_content'>
                       <div className='contact_info_title'>
                         Email
                       </div>
                       <div className='contact_info_text'>
                         abc10@gmail.com
                       </div>
                      </div>
                   </div>

                   <div className='contact_info_item d-flex justify-content-start align-items-center'>
                    <HomeIcon/>
                      <div className='contact_info_content'>
                       <div className='contact_info_title'>
                         Address
                       </div>
                       <div className='contact_info_text'>
                         Hussainpura near kata baag shahjahanpur
                       </div>
                      </div>
                   </div>
                </div>
              </div>
         </div>
    </div>
    
    {/* contact us form */}

    <div className='contact-form'>
        <div className='container contact-box1'>
          <div className='row'>
            <div>
            <div className='contact-form-container py-5'>
                <h2>Get in Touch</h2>
                <form method="POST" id="contact-form">
                  <div className='contact-form-name1 d_flex justify-content-between align-items-between'>

                    <input type="text" id='contact-form-name'
                     className='contact-form-name input_field'
                     name='firstname'
                     value={userData.firstname}
                     onChange={handleInputs}
                     placeholder='your name' required/>

                    <input type="email" id='contact-form-email'
                     className='contact-form-email input_field'
                     value={userData.email}
                     name='email'
                     onChange={handleInputs}
                     placeholder='your Email' required/>

                    <input type="number" id='contact-form-phone'
                     className='contact-form-phone input_field'
                     value={userData.phone}
                     name='phone'
                     onChange={handleInputs}
                     placeholder='your phone' required/>
   
                  </div>
                 
                  <div className='contact-form-text mt-5'>
                       <textarea className='text_field contact-form-message' id="" value={userData.message} 
                       name='message'
                       onChange={handleInputs}
                       cols="80" rows="9" placeholder='Enter your Message' required></textarea>
                  </div>

                  <div className='contact-form-button'>
                    <button type="submit" className='button contact-submit-button' onClick={contactForm}>Send Message</button>

                  </div>
                </form>

            </div>
             
           </div>
        </div>
          

        </div>

    </div>
    </div>

<Footer/>
    </>
  )
}

export default Contact;