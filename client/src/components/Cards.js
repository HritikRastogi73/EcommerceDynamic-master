import React from 'react';
import '../styles/Cards.css';

const Cards = ({item,handleClick}) => {
   
    const {id,title,Details,price,img}=item;
  return (
    <div className='cards'>
        <div className='image_box'>
            <img className="img3" src={img} alt=""/>
        </div>
            <div className='details'>
                <p>{title}</p>
                <h5>{Details}</h5>
                <h6>{price}</h6>
                <button className="add" onClick={()=>handleClick(item)}>Add to cart</button>

            </div>
        

    </div>
  )
}

export default Cards;