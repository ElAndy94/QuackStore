import React from 'react';
import Layout from '../../components/Layout';

const Products = () => {
  return (
    <Layout
      seo={{
        title: 'Products | QuackStore',
        description: 'Products Stock | QuackStore',
        canonicalUrl: 'https://quackstore.com/products',
      }}
    >
      Products
    </Layout>
  );
};

export default Products;
