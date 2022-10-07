import { NextPage } from 'next';
import { useState } from 'react';
import Layout from '../../components/Layout';

import FiltersSidebar from '../../components/UI/FiltersSidebar';
import { ListboxOption } from '../../components/UI/Listbox';
import ProductBox from '../../components/ProductsView/ProductBox';
import SearchBar from '../../components/UI/SearchBar';

const Search: NextPage = () => {
  const [searchProducts, setSearchProducts] = useState('');
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [filterBy, setFilterBy] = useState<ListboxOption | undefined>();

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
          <SearchBar
            searchProducts={searchProducts}
            setSearchProducts={setSearchProducts}
          />
          <div className="w-full flex">
            <div className="w-1/3">
              <FiltersSidebar
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
                  return <ProductBox product={product} key={product.id} />;
                })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;

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

type Category = {
  id: number;
  name: string;
  type: {
    title: string;
    options: ListboxOption[];
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
            id: '30',
            title: 'Breathable',
            value: 'breathable',
          },
          {
            id: '174',
            title: 'Bounce',
            value: 'bounce',
          },
          {
            id: '57',
            title: 'Primeknit',
            value: 'primeknit',
          },
          {
            id: '200',
            title: 'Stealth',
            value: 'stealth',
          },
        ],
      },
      {
        title: 'Size',
        options: [
          {
            id: '147',
            title: '6',
            value: '6',
          },

          {
            id: '215',
            title: '6.5',
            value: '6.5',
          },
          {
            id: '216',
            title: '7',
            value: '7',
          },
          {
            id: '217',
            title: '7.5',
            value: '7.5',
          },
          {
            id: '218',
            title: '8',
            value: '8',
          },
          {
            id: '219',
            title: '8.5',
            value: '8.5',
          },
          {
            id: '220',
            title: '9',
            value: '9',
          },
          {
            id: '221',
            title: '9.5',
            value: '9.5',
          },
          {
            id: '222',
            title: '10',
            value: '10',
          },
          {
            id: '223',
            title: '10.5',
            value: '10.5',
          },
          {
            id: '224',
            title: '11',
            value: '11',
          },
          {
            id: '225',
            title: '11.5',
            value: '11.5',
          },
          {
            id: '4',
            title: '12',
            value: '12',
          },
          {
            id: '226',
            title: '12.5',
            value: '12.5',
          },
          {
            id: '227',
            title: '13',
            value: '13',
          },
          {
            id: '228',
            title: '13.5',
            value: '13.5',
          },
          {
            id: '229',
            title: '14',
            value: '14',
          },
        ],
      },
      {
        title: 'Brand',
        options: [
          {
            id: '68',
            title: 'Adidas',
            value: 'adidas',
          },
          {
            id: '156',
            title: 'Nike',
            value: 'nike',
          },
          {
            id: '194',
            title: 'Puma',
            value: 'puma',
          },
          {
            id: '3',
            title: 'Reebok',
            value: 'reebok',
          },
          {
            id: '32',
            title: 'New Balance',
            value: 'new-balance',
          },
          {
            id: '3',
            title: 'Vans',
            value: 'vans',
          },
          {
            id: '89',
            title: 'Converse',

            value: 'converse',
          },
          {
            id: '97',
            title: 'Asics',
            value: 'asics',
          },
          {
            id: '122',
            title: 'Jordan',
            value: 'jordan',
          },
          {
            id: '147',
            title: 'Under Armour',
            value: 'under-armour',
          },
          {
            id: '196',
            title: 'Fila',
            value: 'fila',
          },
          {
            id: '12',
            title: 'Saucony',
            value: 'saucony',
          },
          {
            id: '59',
            title: 'Diadora',
            value: 'diadora',
          },
          {
            id: '87',
            title: 'Onitsuka Tiger',
            value: 'onitsuka-tiger',
          },
          {
            id: '242',
            title: 'Hoka One One',
            value: 'hoka-one-one',
          },
          {
            id: '211',
            title: 'Brooks',
            value: 'brooks',
          },
          {
            id: '158',
            title: 'Salomon',
            value: 'salomon',
          },
          {
            id: '217',
            title: 'Skechers',
            value: 'skechers',
          },
          {
            id: '121',
            title: 'Mizuno',
            value: 'mizuno',
          },
          {
            id: '163',
            title: 'Merrell',
            value: 'merrell',
          },
          {
            id: '15',
            title: 'The North Face',
            value: 'the-north-face',
          },
          {
            id: '151',
            title: 'Timberland',
            value: 'timberland',
          },
          {
            id: '88',
            title: 'New Balance',
            value: 'new-balance',
          },
          {
            id: '58',
            title: 'Helly Hansen',
            value: 'helly-hansen',
          },
          {
            id: '84',
            title: 'Columbia',
            value: 'columbia',
          },
          {
            id: '53',
            title: 'K-Swiss',

            value: 'k-swiss',
          },
          {
            id: '104',
            title: 'Ecco',
            value: 'ecco',
          },
          {
            id: '67',
            title: 'Asolo',
            value: 'asolo',
          },
        ],
      },
      {
        title: 'Price range',
        options: [
          {
            id: '110',
            title: '£0 - £100',
            value: '0-100',
          },
          {
            id: '82',
            title: '£100 - £200',
            value: '100-200',
          },
          {
            id: '239',
            title: '£200 - £300',
            value: '200-300',
          },
          {
            id: '218',
            title: '£300 - £400',
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
            id: '',
            title: 'Hiking',
            value: 'hiking',
          },
          {
            id: '83',
            title: 'Running',
            value: 'running',
          },
          {
            id: '80',
            title: 'Trail',
            value: 'trail',
          },
          {
            id: '91',
            title: 'Walking',
            value: 'walking',
          },
          {
            id: '32',
            title: 'Climbing',
            value: 'climbing',
          },
          {
            id: '32',
            title: 'Cycling',
            value: 'cycling',
          },
        ],
      },
      {
        title: 'Indoor',
        options: [
          {
            id: '82',
            title: 'Gym',
            value: 'gym',
          },
          {
            id: '233',
            title: 'Training',
            value: 'training',
          },
          {
            id: '63',
            title: 'Basketball',
            value: 'basketball',
          },
          {
            id: '66',
            title: 'Soccer',
            value: 'soccer',
          },
          {
            id: '129',
            title: 'Tennis',
            value: 'tennis',
          },
          {
            id: '27',
            title: 'Volleyball',
            value: 'volleyball',
          },
          {
            id: '145',
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
