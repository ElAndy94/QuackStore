import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Icon from '../../components/UI/Icon';
import Image from 'next/image';
import clsx from 'clsx';
import FiltersSidebar from '../../components/UI/FiltersSidebar';

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

const Search: NextPage = () => {
  const [searchProducts, setSearchProducts] = useState('');
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [sortBy, setSortBy] = useState<string>('What`s new');
  const [filterBy, setFilterBy] = useState<string>('');

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
  }, [products, sortBy]);

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
            <button type="button" onClick={() => setSearchProducts('')}>
              <Icon name="cross" width="40px" />
            </button>
          </div>
          <div className="w-full flex">
            <div className="w-1/3">
              <FiltersSidebar
                sortBy={sortBy}
                setSortBy={setSortBy}
                products={products}
                setProducts={setProducts}
                filterBy={filterBy}
                setFilterBy={setFilterBy}
                categories={categories}
              />
            </div>
            <ul className="grid grid-cols-3 grid-flow-row auto-rows-max w-full h-full">
              {products
                .filter(product =>
                  product.title.toLowerCase().includes(searchProducts.toLowerCase())
                )
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
                          {product.colors.map((color, index) => {
                            return (
                              <button
                                key={`${product.id}${color}${index}`}
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
                        <p className="text-lg font-semibold">£{product.price}</p>
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

const categories: Category[] = [
  {
    id: 1,
    name: 'Filter',
    type: [
      {
        title: 'Technology',
        options: [
          {
            title: 'Breathable',
            value: 'breathable',
          },
          {
            title: 'Bounce',
            value: 'bounce',
          },
          {
            title: 'Primeknit',
            value: 'primeknit',
          },
          {
            title: 'Stealth',
            value: 'stealth',
          },
        ],
      },
      {
        title: 'Size',
        options: [
          {
            title: '6',
            value: '6',
          },

          {
            title: '6.5',
            value: '6.5',
          },
          {
            title: '7',
            value: '7',
          },
          {
            title: '7.5',
            value: '7.5',
          },
          {
            title: '8',

            value: '8',
          },
          {
            title: '8.5',
            value: '8.5',
          },
          {
            title: '9',
            value: '9',
          },
          {
            title: '9.5',
            value: '9.5',
          },
          {
            title: '10',
            value: '10',
          },
          {
            title: '10.5',
            value: '10.5',
          },
          {
            title: '11',
            value: '11',
          },
          {
            title: '11.5',
            value: '11.5',
          },
          {
            title: '12',
            value: '12',
          },
          {
            title: '12.5',
            value: '12.5',
          },
          {
            title: '13',
            value: '13',
          },
          {
            title: '13.5',
            value: '13.5',
          },
          {
            title: '14',
            value: '14',
          },
        ],
      },
      {
        title: 'Brand',
        options: [
          {
            title: 'Adidas',
            value: 'adidas',
          },
          {
            title: 'Nike',
            value: 'nike',
          },
          {
            title: 'Puma',
            value: 'puma',
          },
          {
            title: 'Reebok',
            value: 'reebok',
          },
          {
            title: 'New Balance',
            value: 'new-balance',
          },
          {
            title: 'Vans',
            value: 'vans',
          },
          {
            title: 'Converse',

            value: 'converse',
          },
          {
            title: 'Asics',
            value: 'asics',
          },
          {
            title: 'Jordan',
            value: 'jordan',
          },
          {
            title: 'Under Armour',
            value: 'under-armour',
          },
          {
            title: 'Fila',
            value: 'fila',
          },
          {
            title: 'Saucony',
            value: 'saucony',
          },
          {
            title: 'Diadora',
            value: 'diadora',
          },
          {
            title: 'Onitsuka Tiger',
            value: 'onitsuka-tiger',
          },
          {
            title: 'Hoka One One',
            value: 'hoka-one-one',
          },
          {
            title: 'Brooks',
            value: 'brooks',
          },
          {
            title: 'Salomon',
            value: 'salomon',
          },
          {
            title: 'Skechers',
            value: 'skechers',
          },
          {
            title: 'Mizuno',
            value: 'mizuno',
          },
          {
            title: 'Merrell',
            value: 'merrell',
          },
          {
            title: 'The North Face',
            value: 'the-north-face',
          },
          {
            title: 'Timberland',
            value: 'timberland',
          },
          {
            title: 'New Balance',
            value: 'new-balance',
          },
          {
            title: 'Helly Hansen',
            value: 'helly-hansen',
          },
          {
            title: 'Columbia',
            value: 'columbia',
          },
          {
            title: 'K-Swiss',

            value: 'k-swiss',
          },
          {
            title: 'Ecco',
            value: 'ecco',
          },
          {
            title: 'Asolo',
            value: 'asolo',
          },
        ],
      },
      {
        title: 'Price range',
        options: [
          {
            title: '0 - 100',
            value: '0-100',
          },
          {
            title: '100 - 200',
            value: '100-200',
          },
          {
            title: '200 - 300',
            value: '200-300',
          },
          {
            title: '300 - 400',
            value: '300-400',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Activity',
    type: [
      {
        title: 'Outdoor',
        options: [
          {
            title: 'Hiking',
            value: 'hiking',
          },
          {
            title: 'Running',
            value: 'running',
          },
          {
            title: 'Trail',
            value: 'trail',
          },
          {
            title: 'Walking',
            value: 'walking',
          },
          {
            title: 'Climbing',
            value: 'climbing',
          },
          {
            title: 'Cycling',
            value: 'cycling',
          },
        ],
      },
      {
        title: 'Indoor',
        options: [
          {
            title: 'Gym',
            value: 'gym',
          },
          {
            title: 'Training',
            value: 'training',
          },
          {
            title: 'Basketball',
            value: 'basketball',
          },
          {
            title: 'Soccer',
            value: 'soccer',
          },
          {
            title: 'Tennis',
            value: 'tennis',
          },
          {
            title: 'Volleyball',
            value: 'volleyball',
          },
          {
            title: 'Yoga',
            value: 'yoga',
          },
        ],
      },
    ],
  },
];
const mockProducts: Product[] = [
  {
    id: 7564,
    title: 'Adidas',
    description: 'Running Footwear',
    image: '/assets/shoesTransparent.png',
    price: '999',
    inStock: true,
    colors: ['magenta', 'forest-green'],
    releaseDate: '2018-01-01',
    numberOfSales: '23',
  },
  {
    id: 7914,
    title: 'Nike',
    description: 'Running Footwear',
    image: '/assets/shoesTransparent.png',
    price: '778',
    inStock: true,
    colors: ['magenta', 'ultra-marine-blue'],
    releaseDate: '2020-01-01',
    numberOfSales: '42',
  },
  {
    id: 7834,
    title: 'Puma',
    description: 'Stylish Footwear',
    image: '/assets/shoesTransparent.png',
    price: '847',
    inStock: true,
    colors: ['magenta', 'orange'],
    releaseDate: '2019-01-01',
    numberOfSales: '12',
  },
  {
    id: 7724,
    title: 'Fila',
    description: 'Men Footwear',
    image: '/assets/shoesTransparent.png',
    price: '90',
    inStock: true,
    colors: ['primary', 'orange'],
    releaseDate: '2022-02-01',
    numberOfSales: '10',
  },
  {
    id: 7624,
    title: 'Asics',
    description: 'Kids Footwear',
    image: '/assets/shoesTransparent.png',
    price: '1400',
    inStock: true,
    colors: [],
    releaseDate: '2022-01-01',
    numberOfSales: '22',
  },
  {
    id: 7524,
    title: 'New Balance',
    description: 'Running Footwear',
    image: '/assets/shoesTransparent.png',
    price: '10',
    inStock: true,
    colors: ['magenta', 'orange'],
    releaseDate: '2021-01-01',
    numberOfSales: '75',
  },
  {
    id: 7424,
    title: 'Reebok',
    description: 'Running Footwear',
    image: '/assets/shoesTransparent.png',
    price: '150',
    inStock: true,
    colors: ['magenta', 'orange'],
    releaseDate: '2021-01-01',
    numberOfSales: '75',
  },
  {
    id: 7324,
    title: 'Fendi',
    description: 'Running Footwear',
    image: '/assets/shoesTransparent.png',
    price: '65',
    inStock: true,
    colors: ['granite-gray', 'orange'],
    releaseDate: '2021-01-01',
    numberOfSales: '555',
  },
];
