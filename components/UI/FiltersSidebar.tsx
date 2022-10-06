import { type } from 'os';
import React, { FC, useEffect } from 'react';
import Button from './Buttons';
import Icon from './Icon';
import Popover from './Popover';

interface Props {
  products: Product[];
  sortBy: string;
  setSortBy: (value: string) => void;
  setProducts: (value: Product[]) => void;
  filterBy: string;
  setFilterBy: (value: string) => void;
  categories: Category[];
}

const FiltersSidebar: FC<Props> = ({
  sortBy,
  setSortBy,
  products,
  setProducts,
  filterBy,
  setFilterBy,
  categories,
}) => {
  useEffect(() => {
    const sortedProducts = [...products].sort((a, b) => {
      if (sortBy === 'What`s new') {
        return b.releaseDate.localeCompare(a.releaseDate);
      }
      if (sortBy === 'Price: low to high') {
        return +a.price - +b.price;
      }
      if (sortBy === 'Price: high to low') {
        return +b.price - +a.price;
      }
      if (sortBy === 'Most popular') {
        return +b.numberOfSales - +a.numberOfSales;
      }
      return 0;
    });
    setProducts(sortedProducts);
  }, [products, setProducts, sortBy]);

  return (
    <div className="border flex flex-col ">
      <ul className="w-full p-6 mb-10">
        <li className="w-full flex flex-col gap-6">
          <label htmlFor="sort" className="text-primary font-semibold text-lg">
            Sort
          </label>
          <Popover
            buttonTitle={
              <div className="bg-grey-100 w-full px-4 py-3 rounded-md flex justify-between">
                <p>{sortBy}</p>
                <Icon name="bottom-chevron" width="24px" />
              </div>
            }
            className="rounded-md font-light w-full border p-4 bg-white"
          >
            <div className="flex flex-col">
              <Button
                type="transparent"
                onClick={() => {
                  setSortBy('What`s new');
                }}
              >
                What&apos;s new
              </Button>
              <Button type="transparent" onClick={() => setSortBy('Price: low to high')}>
                Price: low to high
              </Button>
              <Button type="transparent" onClick={() => setSortBy('Price: high to low')}>
                Price: high to low
              </Button>
              <Button type="transparent" onClick={() => setSortBy('Most popular')}>
                Most popular
              </Button>
            </div>
          </Popover>
        </li>
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
                  <li key={`${category.id}${item.title}`}>
                    <Popover
                      buttonTitle={
                        <div className="bg-white w-full px-4 py-4 rounded-md flex justify-between">
                          {filterBy !== '' ? (
                            <p>{filterBy}</p>
                          ) : (
                            <p className="text-granite-gray">{item.title}</p>
                          )}
                          <Icon name="bottom-chevron" width="24px" />
                        </div>
                      }
                      className="rounded-md font-light w-full border p-4 bg-white"
                    >
                      {item.options.map(option => {
                        return (
                          <div
                            className="flex flex-col"
                            key={`${category.id}${item.title}${option.value}`}
                          >
                            <Button
                              type="transparent"
                              onClick={() => {
                                setFilterBy(option.value);
                              }}
                            >
                              {option.title}
                            </Button>
                          </div>
                        );
                      })}
                    </Popover>
                  </li>
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

type Category = {
  id: number;
  name: string;
  type: {
    title: string;
    options: {
      title: string;
      value: string;
    }[];
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
