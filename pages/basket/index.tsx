import React from 'react';
import Layout from '../../components/Layout';

const Basket = () => {
  return (
    <Layout
      seo={{
        title: 'Basket | QuackStore',
        description: 'Basket products | QuackStore',
        canonicalUrl: 'https://quackstore.com/Basket',
      }}
    >
      <section className="">
        <h1>Shopping cart</h1>
        <p>Total: {}items</p>
      </section>
    </Layout>
  );
};

export default Basket;
