import { GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import Layout from '../../components/Layout';
import ContentfulApi from '../../utils/ContentfulApi';
import { Product, Sku } from '../../types/product';
import FullProduct from '../../components/ProductsView/FullProduct';
interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await ContentfulApi.getProductsByDepartment('men');
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
  const sku = await ContentfulApi.getProductSkus(product.sys.id);
  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product,
      sku,
    },
  };
};

const Page = ({ product, sku }: { product: Product; sku: Sku[] }) => {
  if (!product) return <>Loading...</>;

  return (
    <Layout
      seo={{
        title: `${product.name} | QuackStore`,
        description: `Mens | QuackStore`,
        canonicalUrl: `https://quackstore.com/men`,
        image: product.imagesCollection.items[0].url,
      }}
    >
      <FullProduct product={product} skus={sku} />
    </Layout>
  );
};

export default Page;
