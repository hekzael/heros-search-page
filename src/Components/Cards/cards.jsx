import React, { useContext } from 'react'
import './cards.css';
import { getImageUrl } from '../../api';
import { Context } from '../Context';

const Cards = ({id, name, ext, url}) =>{
  const { handleModalToggle } = useContext(Context)
  return(
      <div className='card' 
        id={id}
        onClick = { () => handleModalToggle(id , name)}  
      >
        <div className='card-img-overlay'>
          <img className='card-img' src={getImageUrl(url, ext, 'character')} alt={`${name}`}/>
        </div>
        <div className='card-body'>
          <h3 className='card-text'>{name}</h3>
        </div>
      </div>
  )
}

export default Cards;
