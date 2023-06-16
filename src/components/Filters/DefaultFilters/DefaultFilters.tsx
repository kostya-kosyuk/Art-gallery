import React from 'react';
import { Link } from 'react-router-dom';

import './DefaultFilters.scss';

export const DefaultFilters: React.FC = () => {
  const colorsArr = (): number[] => {
    const arr = [];
    for (let i = 0; i < 120; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <div className='defaultFilters'>
      <div className="defaultFilters__type">
        <h3 className='defaultFilters__type__title'>
          Type
        </h3>

        <div className="defaultFilters__type__list">
          <Link
            to='/artworks'
            className="defaultFilters__type__link"
          >
            All
          </Link>
          <Link
            to='/artworks/type:new'
            className="defaultFilters__type__link"
          >
            New
          </Link>
          <Link
            to='/artworks/type:sale'
            className="defaultFilters__type__link"
          >
            Sale
          </Link>
        </div>
      </div>

      <div className="defaultFilters__color">
        <h3 className='defaultFilters__color__title'>
          Color
        </h3>

        <ul className="defaultFilters__color__list">
          {colorsArr().map(color => (
            <li
              key={color}
              className="defaultFilters__color__item"
            >
              <Link
                to={`/colors:${color}`}
                className="defaultFilters__color__link"
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="defaultFilters__price">
        <h3 className='defaultFilters__price__title'>
          Price
        </h3>
        
        <div className="defaultFilters__price__limits">
          <input
            type="text"
            className='defaultFilters__price__limits__input defaultFilters__price__limits__input--min'
            placeholder='Min ($)'
          />
          {'-'}
          <input
            type="text"
            className='defaultFilters__price__limits__input defaultFilters__price__limits__input--max'
            placeholder='Max ($)'
          />
        </div>

        <Link
          to='/price:-500'
          className='defaultFilters__price__link'
        >
          Under $500</Link>
        <Link
          to='/price:500-1000'
          className='defaultFilters__price__link'
        >
          $500 - $1.000</Link>
        <Link
          to='/price:1000-2000'
          className='defaultFilters__price__link'
        >
          $1.000 - $2.000</Link>
        <Link
          to='/price:2000-5000'
          className='defaultFilters__price__link'
        >
          $2.000 - $5.000</Link>
        <Link
          to='/price:5000-10000'
          className='defaultFilters__price__link'
        >
          $5.000 - $10.000</Link>
        <Link
          to='/price:10000-'
          className='defaultFilters__price__link'
        >
          Over $10.000</Link>
      </div>
    </div>
  );
};
