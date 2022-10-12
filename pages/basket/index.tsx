import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image';
import Button from '../../components/UI/Buttons';
import useBasket from '../../store/basket';
import LargeCard from '../../components/ProductsView/LargeCard';

const Basket = () => {
  const {
    addToBasket,
    basketProducts,
    totalPrice,
    removeFromBasket,
    updateProductQuantity,
  } = useBasket();

  return (
    <Layout
      seo={{
        title: 'Basket | QuackStore',
        description: 'Basket products | QuackStore',
        canonicalUrl: 'https://quackstore.com/Basket',
      }}
    >
      <div className="wrapper mt-20 ">
        <section className="w-4/5">
          <div>
            <h1 className="font-bold text-primary tracking-tight">Shopping cart</h1>
            <p className="text-granite-gray">
              Total: <span className="text-primary font-medium">{5}</span> items
            </p>
          </div>
          <ul className="mt-10">
            {basketProducts.map(product => {
              return (
                <li key={product.sys.id}>
                  <LargeCard
                    product={product}
                    onRemove={() => removeFromBasket(product)}
                    onIncrease={() => updateProductQuantity(product, '+')}
                    onDecrease={() => updateProductQuantity(product, '-')}
                  />
                </li>
              );
            })}
          </ul>
        </section>
        <section className="border p-4">
          <article className="flex flex-col gap-5 p-6 text-primary border-b">
            <h5 className="font-bold text-primary tracking-tight text-xl">
              Order Summary
            </h5>
            <div className="flex justify-between">
              <p>Total products</p>
              <p>£{100}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping costs</p>
              <p>£{25}</p>
            </div>
            <div className="mt-5 flex justify-center w-full">
              <input
                type="text"
                placeholder="Promo Code"
                className="border focus:outline-none rounded-l px-5 py-2 w-2/3"
              />
              <Button type="dark" className="rounded-r focus:rounded-l-none">
                Apply
              </Button>
            </div>
          </article>
          <article className="flex flex-col mt-14 gap-5 p-6 text-primary">
            <div className="flex justify-between">
              <p>Shipment</p>
              <p>£{25}</p>
            </div>
            <div className="flex justify-between">
              <p>Applied promo code</p>
              <p className="text-magenta">-£{15}</p>
            </div>
            <div className="flex justify-between">
              <p>Total</p>
              <p>£{totalPrice}</p>
            </div>
          </article>
          <article className="flex flex-col justify-between gap-5 p-6">
            <Button type="dark" size="full">
              Proceed to Checkout
            </Button>
            <Button type="outline" size="full">
              Member Checkout
            </Button>
          </article>
          <article className="flex flex-col justify-between mt-5">
            <p className="text-primary">Accepted payment methods</p>
            <figure className="mt-6">
              <Image
                src="/assets/images/payment-methods.png"
                alt="payment methods"
                width={500}
                height={70}
              />
            </figure>
          </article>
        </section>
      </div>
    </Layout>
  );
};

export default Basket;
