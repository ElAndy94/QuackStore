import Link from 'next/link';
import React, { FC } from 'react';
import Icon from '../UI/Icon';
import Image from 'next/image';
import Rating from '../UI/Rating';
import clsx from 'clsx';

type Products = {
  id: number;
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
interface Props {
  products: Products[];
  title: string;
}

const Featured: FC<Props> = ({ products, title }) => {
  console.log(products[0].colors[0]);

  return (
    <section className="wrapper flex-col">
      <article className="flex w-full justify-between">
        <h2 className="text-primary font-bold leading-[80px] tracking-tighter">
          {title}
        </h2>
        <Link href="/products">
          <a href="replace" className="flex items-center gap-2 text-magenta">
            view all <Icon name="chevron-magenta" width="6px" height="12px" />
          </a>
        </Link>
      </article>
      <section className="flex mt-20 overflow-y-auto w-full">
        {products.map(product => {
          return (
            <section className="flex" key={product.id}>
              <article className="flex flex-col w-[300px] p-4">
                <div className="flex flex-col items-center justify-center relative">
                  <div
                    className={clsx(
                      'w-40 h-40 bg-gradient-to-r from-white rounded-full',
                      product.colors.length > 0
                        ? `to-${product.colors[0]}`
                        : 'to-granite-grey'
                    )}
                  />
                  <figure className="absolute top-8">
                    <Image
                      src={product.image}
                      width="293.27px"
                      height="180.82px"
                      alt="shoe1"
                    />
                  </figure>
                </div>
                <div className="flex flex-col w-full mt-10">
                  <Rating rating={+product.rating} />
                  <div className="flex flex-col justify-between">
                    <p className="mt-8 text-base">{product.title}</p>
                    <p className="mt-4 font-bold text-lg">£{product.price}</p>
                  </div>
                </div>
              </article>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default Featured;
