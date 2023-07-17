import React, { useEffect,useState} from 'react'
import thapapic from "../images/images (1).jpg";
import {useNavigate} from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/About.css';

const About = () => {

  const navigate=useNavigate();

  const[userData,setUserData]=useState({});
  const callAboutPage=async()=>{
    try{
        const res=await fetch('/about',{
          method:"GET",
          headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
          },
          credentials:"include"
        });

        const data=await res.json();
        console.log(data);
        setUserData(data);

        if(!res.status===200){
          const error=new Error(res.error);
          throw error;
        }
    }catch(err){
     console.log(err);
     navigate('/login');
    }
  }

  useEffect(()=>{
    callAboutPage();
  },[]);
  return (
    <>
        <div className='container emp-profile'>
          <form method="GET">
            <div className='row'>
               <div className='col-md-4'>
                <div className='profile-img'>
                  <img src={thapapic} alt="pic" width={300} height={200}/>
                </div>
               </div>

               <div className='col-md-6'>
                  <div className='profile-head'>
                    <h5>{ userData.firstname}</h5>
                    <h5>web developer</h5>
                    <h2>Profile</h2>
                  </div>
               </div>

            </div>


            <div className='row'>
              <div className='col-md-4'>
                  <div className='profile-work'>
                    <h3>work Link</h3>
                    <a href="https://www.linkedin.com/in/anshika-srivastava-8b21351b8/" target="_thapa">Linkedin</a><br/>
                    <a href="https://github.com/Anshika-tech" target="_thapa">Github</a><br/>
                    <a href="https://leetcode.com/Anshika_Sri" target="_thapa">Leetcode</a><br/>
                    <a href="https://www.hackerrank.com/2A_201500114" target="_thapa">Hackerrank</a><br/>
                    <a href="https://www.codechef.com/users/anshika_tech" target="_thapa">Codechef</a><br/>

                  </div>
              </div>
             
             <div className='col-md-8 pl-5 about-info'>
               {/* <div className='tab-content profile-tab' id="myTabContent"> */}
                {/* <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'> */}
                     <div className='row det2'>
                      <div className='col-md-6'>
                        <label>User ID</label>
                      </div>

                      <div className='col-md-6 '>
                        <h5>34763976</h5>
                      </div>
                     </div>

                     <div className='row mt-3 det2'>
                      <div className='col-md-6'>
                        <label>FirstName</label>
                      </div>

                      <div className='col-md-6'>
                        <h5>{ userData.firstname}</h5>
                      </div>
                     </div>

                     <div className='row mt-3 det2'>
                      <div className='col-md-6'>
                        <label>LastName</label>
                      </div>

                      <div className='col-md-6'>
                        <h5>{ userData.lastname}</h5>
                      </div>
                     </div>

                     <div className='row mt-3 det2'>
                      <div className='col-md-6'>
                        <label>Email</label>
                      </div>

                      <div className='col-md-6 '>
                        <h5>{ userData.email}</h5>
                      </div>
                     </div>

                     <div className='row mt-3 det2'>
                      <div className='col-md-6'>
                        <label>Phone</label>
                      </div>

                      <div className='col-md-6 '>
                        <h5>{ userData.phone}</h5>
                      </div>
                     </div>

                     <div className='row mt-3 det2'>
                      <div className='col-md-6'>
                        <label>Gender</label>
                      </div>

                      <div className='col-md-6'>
                        <h5>{ userData.gender}</h5>
                      </div>
                     </div>

                     
                     <div className='row mt-3 det2'>
                      <div className='col-md-6'>
                        <label>Age</label>
                      </div>

                      <div className='col-md-6'>
                        <h5>{ userData.age}</h5>
                      </div>
                     </div>

                </div>

               {/* </div> */}

             {/* </div> */}
            </div>
          </form>

        </div>
        <Footer/>
    </>
  )
}

export default About