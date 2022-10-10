import clsx from 'clsx';
import { GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Button from '../../components/UI/Buttons';
import RadioSelect from '../../components/UI/RadioSelect';
import Rating from '../../components/UI/Rating';
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
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);
  if (!product) return <>Loading...</>;

  const { name, description, colors, price, sys, rating, images, department, size } =
    product;
  return (
    <Layout
      seo={{
        title: `${product.name} | QuackStore`,
        description: `| QuackStore`,
        canonicalUrl: `https://quackstore.com/${product.slug}`,
      }}
    >
      <section className="wrapper flex mt-32">
        <article className="w-1/2"></article>
        <article className="w-1/2">
          <div className="w-full flex justify-between">
            <p>{department}</p>
            <Rating rating={rating} />
          </div>
          <h1>{product.name}</h1>
          <div className="flex gap-5">
            <p>Available in:</p>
            <button
              key={`${sys.id}${colors}`}
              type="button"
              className={clsx(
                'rounded-full h-5 w-5 border',
                `bg-${colors.toLocaleLowerCase()}`
              )}
              aria-label="item color"
            />
          </div>
          <h2>£{price}</h2>
          {/* <div>{documentToReactComponents(description)}</div> */}
          <h3>Select size</h3>
          <div className="w-full">
            <RadioSelect
              id={'size'}
              name={'Size'}
              value={selectedSize}
              options={size}
              onChange={option => setSelectedSize(option)}
            />
          </div>
          <div className="flex">
            <button
              type="button"
              className="bg-grey-300 w-10 h-10"
              onClick={() => {
                selectedQuantity > 0 && setSelectedQuantity(selectedQuantity - 1);
              }}
            >
              -
            </button>
            <p>{selectedQuantity}</p>
            <button
              type="button"
              onClick={() => {
                setSelectedQuantity(selectedQuantity + 1);
              }}
            >
              +
            </button>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default Page;
