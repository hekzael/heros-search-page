import React, { useEffect } from 'react';
import './result-list.css';
import { getImageUrl } from '../../api';

import Cards from '../Cards';


const ResulList = ( {characters, modalOpen = false } ) => {
  const listModeClass = modalOpen ? 'comic-list' : 'card-list'

  useEffect(()=>{
    
  },[characters])
  return(
    <div className={listModeClass}>
      { characters.map( result => {
        const {
          id,
          description,
          thumbnail : { path, extension },
          name,
          title,
        } = result;

        if( modalOpen ){
          return(
            <div className="comic-entry" key={id}>
              <div className="image-container">
                <img src={getImageUrl(path, extension, 'characterComic')} alt={title}/>
              </div>
              <div className="comic-text">
                <div className="comic-title">
                  {title}
                </div>
                <div>
                  {description}
                </div>
              </div>
            </div>
          )
        }
        return( 
          <Cards key={id} id={id} name={name} ext={extension} url={path} />
        )
      })}
      
    </div>
  )
}

export default ResulList;