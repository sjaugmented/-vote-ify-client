import React from 'react';

const HeaderArt = () => {
  return (
    <div>
      <img
        className='headerArt' 
        src={process.env.PUBLIC_URL + '/assets/images/header.jpg'}
        alt=' '
      />
    </div>
  );
}

export default HeaderArt;
