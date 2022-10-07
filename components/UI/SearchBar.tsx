import React, { FC } from 'react';
import Icon from './Icon';

interface Props {
  searchProducts: string;
  setSearchProducts: (value: string) => void;
}

const SearchBar: FC<Props> = ({ searchProducts, setSearchProducts }) => {
  return (
    <div className="flex w-full px-16 h-40">
      <input
        type="text"
        className="w-full text-2xl font-normal  outline-none"
        placeholder="Type to search"
        value={searchProducts}
        onChange={e => setSearchProducts(e.target.value)}
      />
      <button
        type="button"
        onClick={() => setSearchProducts('')}
        aria-label="clear search"
      >
        <Icon name="cross" width="40px" />
      </button>
    </div>
  );
};

export default SearchBar;
