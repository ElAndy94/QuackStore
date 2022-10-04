import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Icon from '../../components/UI/Icon';
import Image from 'next/image';
import clsx from 'clsx';
import Popover from '../../components/UI/Popover';

const Search = () => {
  const [searchProducts, setSearchProducts] = useState('');

  return (
    <Layout
      seo={{
        title: 'Search | QuackStore',
        description: 'Search for products | QuackStore',
        canonicalUrl: 'https://quackstore.com/search',
      }}
    >
      <div className="wrapper">
        <div className="flex flex-col w-full">
          <div className="flex w-full px-16 h-40">
            <input
              type="text"
              className="w-full text-2xl font-normal  outline-none"
              placeholder="Type to search"
              value={searchProducts}
              onChange={e => setSearchProducts(e.target.value)}
            />
            <button type="button">
              <Icon name="cross" width="40px" />
            </button>
          </div>
          <div className="w-full flex">
            <div className="w-1/3 border ">
              <ul className="p-10">
                <li className="w-full">
                  <label htmlFor="sort" className="font-semibold text-lg mb-8">
                    Sort
                  </label>
                  <Popover
                    buttonTitle={
                      <div className="bg-grey-100 w-full px-4 py-2 rounded-md flex justify-between">
                        <p>What&apos;s new</p>
                        <Icon name="bottom-chevron" width="24px" />
                      </div>
                    }
                    className="rounded-md font-light w-full border p-2 "
                  >
                    <div className="flex flex-col">
                      <button
                        type="button"
                        className="rounded-md hover:bg-grey-100 px-2 py-1 text-left"
                      >
                        What&apos;s new
                      </button>
                      <button
                        type="button"
                        className="rounded-md hover:bg-grey-100 px-2 py-1 text-left"
                      >
                        What&apos;s new
                      </button>
                      <button
                        type="button"
                        className="rounded-md hover:bg-grey-100 px-2 py-1 text-left"
                      >
                        What&apos;s new
                      </button>
                    </div>
                  </Popover>
                </li>
                <li></li>
              </ul>
            </div>
            <ul className="grid grid-cols-3 grid-flow-row auto-rows-max w-full h-full">
              {products
                .filter(product =>
                  product.title.toLowerCase().includes(searchProducts.toLowerCase())
                )
                .sort((a, b) => a.title.localeCompare(b.title))
                .map(product => {
                  return (
                    <li className="w-full border p-4" key={product.id}>
                      <div className="flex justify-between">
                        <div>
                          <h5 className="font-bold">{product.title}</h5>
                          <p className="text-grey-500">{product.description}</p>
                        </div>
                        <button
                          type="button"
                          className="rounded-full h-6 w-6 bg-magenta flex items-cetner justify-center text-white"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex w-full justify-between">
                        <div className="w-60 h-36">
                          <Image
                            src={product.image}
                            alt={product.description}
                            width="250px"
                            height="160px"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          {product.colors.map(color => {
                            return (
                              <button
                                key="color"
                                type="button"
                                className={clsx('rounded-full h-5 w-5', `bg-${color}`)}
                              />
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p
                          className={clsx(
                            'font-medium',
                            product.inStock ? 'text-forest-green' : 'text-grey-400'
                          )}
                        >
                          {product.inStock ? 'In stock' : 'Out of Stock'}
                        </p>
                        <p className="text-lg font-semibold">{product.price}</p>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;

const products = [
  {
    id: 7564,
    title: 'Adidas',
    description: 'Running Footwear',
    image: '/assets/shoesTransparent.png',
    price: 850,
    inStock: true,
    colors: ['magenta', 'forest-green'],
  },
  {
    id: 7914,
    title: 'Nike',
    description: 'Running Footwear',
    image: '/assets/shoesTransparent.png',
    price: 850,
    inStock: true,
    colors: ['magenta', 'ultra-marine-blue'],
  },
  {
    id: 7834,
    title: 'Puma',
    description: 'Stylish Footwear',
    image: '/assets/shoesTransparent.png',
    price: 850,
    inStock: true,
    colors: ['magenta', 'orange'],
  },
  {
    id: 7724,
    title: 'Fila',
    description: 'Men Footwear',
    image: '/assets/shoesTransparent.png',
    price: 850,
    inStock: true,
    colors: ['primary', 'orange'],
  },
  {
    id: 7624,
    title: 'Asics',
    description: 'Kids Footwear',
    image: '/assets/shoesTransparent.png',
    price: 850,
    inStock: true,
    colors: [],
  },
  {
    id: 7524,
    title: 'New Balance',
    description: 'Running Footwear',
    image: '/assets/shoesTransparent.png',
    price: 850,
    inStock: true,
    colors: ['magenta', 'orange'],
  },
  {
    id: 7424,
    title: 'Reebok',
    description: 'Running Footwear',
    image: '/assets/shoesTransparent.png',
    price: 850,
    inStock: true,
    colors: ['magenta', 'orange'],
  },
  {
    id: 7324,
    title: 'Fendi',
    description: 'Running Footwear',
    image: '/assets/shoesTransparent.png',
    price: 850,
    inStock: true,
    colors: ['granite-gray', 'orange'],
  },
];
