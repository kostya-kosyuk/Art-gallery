import React from 'react';
import classNames from 'classnames';

import './Filters.scss';

type Props = {
  filtersStatus: boolean,
  filtersCloser: (_:boolean) => void,
}

export const Filters:React.FC<Props> = ({ filtersStatus,filtersCloser }) => {
  const handlerExit = () => {
    filtersCloser(false);
  }

  return (
    <div className={classNames('filters', {
      'filters--isOpen': filtersStatus,
    })}>
      <div
        className="filters__exit"
        onClick={handlerExit}
      ></div>
      
      <div className="filters__wrapper">
        <div className="filters__type">
          Type
        </div>
        <div className="filters__color">
          Color
        </div>
        <div className="filters__price">
          Price
        </div>
      </div>
    </div>
  );
};
