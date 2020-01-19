import React from 'react';
import { useState, useEffect } from 'react';
import { getChartByNameUrl, allChartUrl, getChartComicsUrl } from '../../api';

export const Context = React.createContext(null);

export const Provider = props => {
  const [ charatsComics, setComits ] = useState([]);
  const [ characters, setcharacters ] = useState([]);
  const [ modalShow, toggleModal ] = useState(false);
  const [ searchQuery, setSearchQuery ] = useState('');
  const [currentCharacter, setCurrentChar] = useState('');
  const [ isFetching, setFetching ] = useState(false);

  const fecthHeros =async (url= allChartUrl, modalOpen = false ) => {
    setFetching(true);
    const response = await fetch(url);
    const json = await response.json();
    const { data: { results } } = json;
    if( url === allChartUrl){
      setcharacters(results);
    }else if( modalOpen ){
      setComits( results );
    }else if(url !== allChartUrl){
      setcharacters(results);
    }
    setFetching(false);

  }

  const fecthMoreHerosBy = () => {
    if(searchQuery === ''){ //busca todos los chart
      fecthMoreHeros();
    }else{
      fecthMoreHerosBySearch();
    }
  }

  const fecthMoreHeros = async ( url = allChartUrl+`&offset=${characters.length}`) => {
    setFetching(true);
    const response = await fetch(url);
    const { data: { results=[] }} = await response.json();
    let data =[ ...characters,...results];
    setcharacters(data);
    setFetching(false);
  }

  const fecthMoreHerosBySearch = async () => {
    setFetching(true);
    let url = getChartByNameUrl(searchQuery)+`&offset=${characters.length}`;
    const response = await fetch(url);
    const { data: { results }} = await response.json();
    setcharacters([...characters,...results]);
    setFetching(false);
  }
  
  const onClickMore = () => {
    fecthMoreHerosBy();
  }

  const handleModalToggle = ( chartId = null , name ) => {
    if( chartId === null ){
      setComits([]);
    } else {
      setCurrentChar(name);
      fecthHeros(getChartComicsUrl(chartId), true)
    }
    toggleModal(!modalShow);
  }

  const handleChangeQuery = e => {
    if( e.target.value ===''){
      setSearchQuery('');
      fecthHeros();
    }else{
      setSearchQuery(e.target.value);
    }
    
  };

  const handleSumbitSearch = e => {
    if (e.key === 'Enter' & searchQuery !=='') {
      fecthHeros(getChartByNameUrl(searchQuery))
    };
  };

  useEffect(() => {
    fecthHeros();
  },[]);

  console.log(isFetching)

  return(
    <Context.Provider
      value = {{
        characters,
        charatsComics,
        modalShow,
        searchQuery,
        handleChangeQuery,
        handleSumbitSearch,
        handleModalToggle,
        currentCharacter,
        onClickMore,
        isFetching,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

//Llamada asincronica a la api

