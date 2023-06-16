import React from 'react';

import './Artwork.scss';

type Props = {
  dataArt: Data,
}

export const Artwork: React.FC<Props> = ({ dataArt }) => {
  return (
    <div className='artwork'>
      <img src={dataArt.image} alt="" className='artwork__img'/>

      <div className="artwork__artist">
        {dataArt.artist}
      </div>
    </div>
  );
};
