import { GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import ContentfulApi from '../../utils/ContentfulApi';
import { Product } from '../../utils/helpers/types/product';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await ContentfulApi.getAllProducts();
  const paths = products.map((product: Product) => {
    return {
      params: { slug: product.slug },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: { params: IParams }) => {
  const product = await ContentfulApi.getProductBySlug(`/${params.slug}`);
  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product,
    },
  };
};

const Page = ({ product }: { product: Product }) => {
  if (!product) return <>Loading...</>;
  return (
    <div>
      <h1>Product</h1>
      <h2>{product.name}</h2>
    </div>
  );
};

export default Page;
