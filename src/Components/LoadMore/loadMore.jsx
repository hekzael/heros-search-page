import React, { useContext } from 'react';
import './loadMore.css';
import { Context } from '../Context';
import Loading from '../Loading';


const LoadMore = () => {
  const { onClickMore, isFetching, characters } = useContext(Context);
  return(
    <div className='center-btn'>
      { isFetching && characters.length >= 20 ? <Loading/> : null }
      <button 
        className='button-load btn'  
        type= 'button'
        onClick = {() => onClickMore() } 
        >Load more</button>
    </div>
  )
};

export default LoadMore;