import React, {useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/Header'
import Amazon from '../components/Amazon';
import Cart from '../components/Cart';


const Products = () => {
  const [show,setShow]=useState(true);
  const [cart,setCart]=useState([]);
  
  const handleClick=(item)=>{
     window.alert(`${item.title} is added`);
      if(cart.indexOf(item)!==-1)
        return;
      setCart([...cart,item]);

  };
  const handleChange=(item,d)=>{
    const ind=cart.indexOf(item);
    const arr=cart;
    arr[ind].amount+=d;
    if(arr[ind].amount===0)
       arr[ind].amount=1;
      setCart([...arr]);
  }
  // useEffect(()=>{
  //   console.log("cart change");

  // },[cart]);
  return (
        <React.Fragment>
             <Header setShow={setShow} size={cart.length}/>
             {
              show?(<Amazon handleClick={handleClick}/>):(<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
              )
             }
             
        </React.Fragment>
  )
}

export default Products