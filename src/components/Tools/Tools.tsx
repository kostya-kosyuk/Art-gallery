import React, { useEffect, useState } from 'react';
import DATA from '../../DATA.json';

import './Tools.scss';
import { FilterIcon } from '../../ui/FilterIcon/FilterIcon';

export const Tools: React.FC = () => {
  const [allCategories, setAllCategories] = useState<string[]>([]);

  useEffect(() => {
    const categories: string[] = [];
    DATA.forEach((item: Data) => {
      if (!categories.includes(item.medium)) {
        categories.push(item.medium);
      }
    });
    setAllCategories(categories);
  }, []);

  return (
    <div className='tools'>
      <button className='tools__button'>
        <FilterIcon />
        Filters
      </button>

      <div className="tools__category category">
        <ul className='category__list'>
          {allCategories.length && allCategories.map((category, i) => (
              <li key={i} className='category__item'>
                {category}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
