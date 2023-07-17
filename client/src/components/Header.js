import React from 'react'
import "../styles/Header.css";

import ShoppingCart from "@material-ui/icons/ShoppingCart";



const Header = ({setShow,size}) => {
  return (
     <nav>
        <div className='nav_box'>
            <span className='my_shop' onClick={()=>setShow(true)}>My shopping</span>
            <div className='cart' onClick={()=>setShow(false)}>
              <span>
                 <ShoppingCart/>
              </span>
              <span>{size}</span>

            </div>

        </div>
     </nav>
  )
}

export default Header;