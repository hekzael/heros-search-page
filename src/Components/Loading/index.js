import React from 'react';
import './loading.css';

const Loading = () => {
  return (
    <div className = 'container-load'>
      <div className = 'preloader' ></div>
      <div><h1>Loading...</h1></div>
    </div>
  )
};

export default Loading;