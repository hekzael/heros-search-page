import React, { useContext } from 'react';
import './App.css';
import SearchBar from "../../Components/SearchBar/";
import { Context } from '../../Components/Context';
import ResultList from '../../Components/ResultList';
import Modal from '../../Components/Modal';
import LoadMore from '../../Components/LoadMore';
import ModalPortal from '../../Components/ModalPortal';
import Loading from '../../Components/Loading';
import NotFound from '../../Components/NotFound';

function App() {
  const { characters, modalShow, isFetching } = useContext(Context);
  return (
    <div className="App">
      <SearchBar/>
      <div>
        <section className='container-section'>
          <div className='container-grid-cards'>
            { isFetching && !modalShow && characters.length <= 0 ? <Loading/> : characters.length === 0 ?
                <NotFound/> :
                <ResultList characters={ characters }/> }
          </div> 
        </section>
         { modalShow ? 
          <ModalPortal>
              <Modal/>            
          </ModalPortal> : null
       }
      </div>
      <LoadMore/>
    </div>
  );
}

export default App;
