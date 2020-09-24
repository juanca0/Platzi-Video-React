import React from 'react';

const Player = () => {
  return (
    <div className='Player'>
      <video controls autoPLay>
        <source src='' type='video/mp4' />
      </video>
      <div classNAme='Player-black'>
        <button type='button'>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default Player;
