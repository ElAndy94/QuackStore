import React from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image';
import Button from '../../components/UI/Buttons';
import Rating from '../../components/UI/Rating';
import Featured from '../../components/ProductsView/Featured';
import ContentfulApi from '../../utils/ContentfulApi';

export async function getStaticProps() {
  try {
    const products = await ContentfulApi.getProductsByDepartment('men');
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    return {
      props: {
        products: [],
      },
    };
  }
}

const Men = ({ products }: any) => {
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
          <Image
            src="/assets/images/shoe3.svg"
            alt="shoe banner"
            width="930px"
            height="575px"
          />
        </figure>
      </section>
      <section>
        <Featured title="Featured men products" products={products} department="men" />
      </section>
    </Layout>
  );
};

export default Men;
