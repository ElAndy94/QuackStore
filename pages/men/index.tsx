import React from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image';
import Button from '../../components/UI/Buttons';
import Rating from '../../components/UI/Rating';
import Featured from '../../components/ProductsView/Featured';

const Men = () => {
  return (
    <Layout
      seo={{
        title: 'Search | QuackStore',
        description: 'Search for products | QuackStore',
        canonicalUrl: 'https://quackstore.com/search',
      }}
    >
      <section className="w-full h-[600px] bg-gradient-to-t from-white to-orange flex justify-start items-center p-16">
        <div className="flex flex-col w-full items-end text-left">
          <div>
            <h2 className="text-primary font-bold leading-[80px] tracking-tighter text-left">
              Best seller this week
            </h2>
            <Rating rating={5} />
            <p className="text-lg text-primary mt-3">
              Adidas Falcon Shoes for women - 2021 Edition
            </p>
            <p className="text-base text-granite-gray">Men Footware</p>
            <p className="mt-4 text-primary font-bold text-lg">£200</p>
            <Button type="primary" className="mt-10">
              Shop Now
            </Button>
          </div>
        </div>
        <figure className="w-full">
          <Image src="/assets/shoe3.svg" alt="shoe banner" width="930px" height="575px" />
        </figure>
      </section>
      <section>
        <Featured title="Featured men products" products={mockProducts} />
      </section>
    </Layout>
  );
};

export default Men;

type Products = {
  id: number;
  brand: string;
  title: string;
  description: string;
  image: string;
  price: string;
  inStock: boolean;
  colors: string[];
  releaseDate: string;
  numberOfSales: string;
  rating: string;
};

const mockProducts: Products[] = [
  {
    id: 7564,
    brand: 'Adidas',
    title: 'Adidas Originals',
    description: 'Running Footwear',
    image: '/assets/shoe4.svg',
    price: '999',
    inStock: true,
    colors: ['forest-green', 'magenta'],
    releaseDate: '2018-01-01',
    numberOfSales: '23',
    rating: '1',
  },
  {
    id: 7914,
    brand: 'Nike',
    title: 'Nike Air Max 270',
    description: 'Running Footwear',
    image: '/assets/shoe2.svg',
    price: '778',
    inStock: true,
    colors: ['magenta', 'ultra-marine-blue'],
    releaseDate: '2020-01-01',
    numberOfSales: '42',
    rating: '4',
  },
  {
    id: 7834,
    brand: 'Puma',
    title: 'Puma RS-X',
    description: 'Stylish Footwear',
    image: '/assets/shoe3.svg',
    price: '847',
    inStock: true,
    colors: ['magenta', 'orange'],
    releaseDate: '2019-04-01',
    numberOfSales: '12',
    rating: '5',
  },
  {
    id: 7724,
    brand: 'Fila',
    title: 'Fila Disruptor',
    description: 'Men Footwear',
    image: '/assets/shoe2.svg',
    price: '90',
    inStock: true,
    colors: ['primary', 'orange'],
    releaseDate: '2022-02-01',
    numberOfSales: '10',
    rating: '3',
  },
  {
    id: 7624,
    brand: 'Asics',
    title: 'Asics Gel-Lyte',
    description: 'Kids Footwear',
    image: '/assets/shoe2.svg',
    price: '1400',
    inStock: true,
    colors: [],
    releaseDate: '2022-01-01',
    numberOfSales: '22',
    rating: '4',
  },
  {
    id: 7524,
    brand: 'New Balance',
    title: 'New Balance 574',
    description: 'Running Footwear',
    image: '/assets/shoe3.svg',
    price: '10',
    inStock: true,
    colors: ['orange', 'magenta'],
    releaseDate: '2021-01-01',
    numberOfSales: '75',
    rating: '2',
  },
  {
    id: 7424,
    brand: 'Reebok',
    title: 'Reebok Classic',
    description: 'Running Footwear',
    image: '/assets/shoe4.svg',
    price: '150',
    inStock: true,
    colors: ['magenta', 'orange'],
    releaseDate: '2021-01-01',
    numberOfSales: '75',
    rating: '1',
  },
  {
    id: 7324,
    brand: 'Fendi',
    title: 'Fendi Falcon Shoes for men - 2021 Edition',
    description: 'Running Footwear',
    image: '/assets/shoe2.svg',
    price: '65',
    inStock: true,
    colors: ['granite-gray', 'orange'],
    releaseDate: '2021-01-01',
    numberOfSales: '555',
    rating: '1',
  },
];
