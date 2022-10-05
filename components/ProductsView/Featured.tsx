import Link from 'next/link';
import React from 'react';
import Icon from '../UI/Icon';
import Image from 'next/image';
import Rating from '../UI/Rating';
const Featured = () => {
  return (
    <section className="wrapper mx-auto mt-32">
      <article className="flex w-full justify-between">
        <h2 className="text-primary font-bold leading-[80px] tracking-tighter">
          Featured products
        </h2>
        <Link href="/products">
          <a href="replace" className="flex items-center gap-2 text-magenta">
            view all <Icon name="chevron-magenta" width="6px" height="12px" />
          </a>
        </Link>
      </article>
      <section className="flex gap-20 mt-20">
        <section className="flex gap-16">
          <article className="flex flex-col">
            <div className="relative">
              <div className="w-40 h-40 bg-gradient-to-r from-white to-orange rounded-full absolute top-0" />
              <figure className="absolute -top-20 -left-28">
                <Image src="/assets/shoe1.svg" width="500px" height="490px" alt="shoe1" />
              </figure>
            </div>
            <div className="flex flex-col mt-64">
              <Rating rating={4} />
              <p className="mt-4 text-base w-3/4">
                Adidas Falcon Shoes for men - 2021 Edition
              </p>
              <p className="font-bold text-lg">£120.50</p>
            </div>
          </article>
        </section>
      </section>
    </section>
  );
};

export default Featured;
