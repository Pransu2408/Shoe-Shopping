import React from 'react'
import '../Styles/card.css'

const Card = ({item,handleClick}) => {

    const {title,author,price,img} = item;

  return (
    <div className='cards'>
        <div className='image_box'>
      <img src={img}></img>
    </div>
    <div className='details'>
        <p>{title}</p>
        <p>{author}</p>
        <p>Price = {price}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
    </div>
    </div>
  )
}

export default Card
 