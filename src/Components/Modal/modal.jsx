import React, { useContext } from 'react';
import { Context } from '../Context';
import ResultList from '../ResultList';
import Loading from '../../Components/Loading';
import './modal.css';
import NotFound from '../NotFound';

const Modal = () => {
  const { handleModalToggle, charatsComics, currentCharacter, isFetching, modalShow } = useContext(Context);
  return(
    <div className="container-all" id="modal">
      <div className="my-modal">
        <nav className='modal-nav'>
          <div className='modal-title'>{currentCharacter}</div>
          <button className="btn-close-modal" onClick={()=>handleModalToggle()}>X</button>
        </nav>
        <div className="container-text">
          { isFetching && modalShow  ? 
              <Loading /> : charatsComics.length === 0 ?
                <NotFound/> :
                <ResultList characters = { charatsComics } modalOpen />
          }
          
        </div>
      </div>
    </div>
  )
  
}

export default Modal;