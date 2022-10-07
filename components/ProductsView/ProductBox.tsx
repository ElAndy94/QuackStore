import React, { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

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

interface Props {
  product: Product;
}

const ProductBox: FC<Props> = ({ product }) => {
  return (
    <li className="w-full border p-4" >
      <div className="flex justify-between">
        <div>
          <h5 className="font-bold">{product.title}</h5>
          <p className="text-grey-500">{product.description}</p>
        </div>
        <button
          type="button"
          className="rounded-full h-6 w-6 bg-magenta flex items-center justify-center text-white"
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
                aria-label="item color"
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
};

export default ProductBox;
