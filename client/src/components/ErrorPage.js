import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>

    <div id='Not-found'>
        <div className='not found'>
            <div className='not-found-404'>
                <h1>404</h1>


            </div>
          
          <NavLink to="/"> Back to homepage</NavLink>
        </div>

    </div>
    </>
  )
}

export default ErrorPage