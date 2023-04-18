import React from 'react';

const ToTop = () => {
  return (
    <div className='top' onClick={() => window.scrollTo(0,0)}>
      <img src='./assets/arrow-icon.svg' alt='flèche vers le haut'/>
    </div>
  );
};

export default ToTop;