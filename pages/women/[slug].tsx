import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
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
import Image from 'next/image';
interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await ContentfulApi.getProductsByDepartment('women');
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

  const {
    name,
    description,
    colors,
    price,
    sys,
    rating,
    imagesCollection,
    department,
    size,
  } = product;
  return (
    <Layout
      seo={{
        title: `${name} | QuackStore`,
        description: `Womens | QuackStore`,
        canonicalUrl: `https://quackstore.com/women`,
      }}
    >
      <section className="wrapper mt-32">
        <article className="w-1/2 px-4">
          <figure>
            <Image
              src={imagesCollection.items[0].url}
              layout="responsive"
              width={imagesCollection.items[0].width}
              height={imagesCollection.items[0].height}
              alt={imagesCollection.items[0].title}
            />
          </figure>
        </article>
        <article className="w-1/2 flex flex-col gap-3">
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
          <div className="flex justify-between mt-5">
            <div className="flex flex-row">
              <button
                type="button"
                className="bg-grey-200 w-12 h-12 border-y border-l"
                onClick={() => {
                  selectedQuantity > 0 && setSelectedQuantity(selectedQuantity - 1);
                }}
              >
                -
              </button>
              <p className="flex items-center justify-center w-14 h-12 border-y">
                {selectedQuantity}
              </p>
              <button
                type="button"
                className="bg-grey-200 w-12 h-12 border-y border-r"
                onClick={() => {
                  setSelectedQuantity(selectedQuantity + 1);
                }}
              >
                +
              </button>
            </div>
            <Button type="primary">Add to cart</Button>
          </div>
          <div className="text-granite-gray mt-10">
            <p className="text-primary font-semibold text-lg">Product Info</p>
            {
              // @ts-ignore
              documentToReactComponents(description.json)
            }
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default Page;
