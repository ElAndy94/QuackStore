import React, { FC, useEffect, useState } from 'react';
import Listbox from './Listbox';
import { ListboxOption } from './Listbox';

interface Props {
  products: Product[];
  setProducts: (value: Product[]) => void;
  filterBy: ListboxOption | undefined;
  setFilterBy: (value: ListboxOption) => void;
  categories: Category[];
}

const FiltersSidebar: FC<Props> = ({
  products,
  setProducts,
  filterBy,
  setFilterBy,
  categories,
}) => {
  const [sortBy, setSortBy] = useState<ListboxOption>(SortOptions[0]);

  useEffect(() => {
    const sortedProducts = [...products].sort((a, b) => {
      if (sortBy.value === 'what-s-new') {
        return b.releaseDate.localeCompare(a.releaseDate);
      }
      if (sortBy.value === 'low-to-high') {
        return +a.price - +b.price;
      }
      if (sortBy.value === 'high-to-low') {
        return +b.price - +a.price;
      }
      if (sortBy.value === 'most-popular') {
        return +b.numberOfSales - +a.numberOfSales;
      }
      return 0;
    });
    setProducts(sortedProducts);
  }, [setProducts, sortBy]);

  return (
    <div className="border flex flex-col ">
      <ul className="w-full p-6 mb-10">
        <label htmlFor="sort" className="text-primary font-semibold text-lg">
          Sort
        </label>
        <Listbox
          id={`sort1`}
          name={sortBy.title}
          options={SortOptions}
          value={sortBy}
          onChange={value => setSortBy(value)}
          buttonClassName="bg-grey-100 mt-5"
        />
      </ul>
      {categories.map(category => {
        return (
          <ul className="flex flex-col gap-5 w-full bg-grey-100 p-6" key={category.id}>
            <>
              <label htmlFor="sort" className="text-primary font-semibold text-lg">
                {category.name}
              </label>
              {category.type.map(item => {
                return (
                  <Listbox
                    key={`${category.id}${item.title}`}
                    id={`${category.id}${item.title}`}
                    name={item.title}
                    options={item.options}
                    value={filterBy}
                    onChange={value => setFilterBy(value)}
                    buttonClassName="bg-white"
                  />
                );
              })}
            </>
          </ul>
        );
      })}
    </div>
  );
};

export default FiltersSidebar;

const SortOptions: ListboxOption[] = [
  {
    id: '120',
    title: 'What`s new',
    value: 'what-s-new',
  },
  {
    id: '201',
    title: 'Price: low to high',
    value: 'low-to-high',
  },
  {
    id: '173',
    title: 'Price: high to low',
    value: 'high-to-low',
  },
  {
    id: '42',
    title: 'Price: low to high',
    value: 'low-to-high',
  },
  {
    id: '229',
    title: 'Most popular',
    value: 'most-popular',
  },
];

type Category = {
  id: number;
  name: string;
  type: {
    title: string;
    options: ListboxOption[];
  }[];
};
type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  inStock: boolean;
  colors: string[];
  releaseDate: string;
  numberOfSales: string;
};
