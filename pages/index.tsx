import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Button from '../components/UI/Buttons';
import Image from 'next/image';
import Icon from '../components/UI/Icon';
import Featured from '../components/ProductsView/Featured';
import { useTranslation } from 'react-i18next';
import ContentfulApi from '../utils/ContentfulApi';

export async function getStaticProps() {
  try {
    const products = await ContentfulApi.getAllProducts();
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

const Footwear: NextPage = ({ products }: any) => {
  const { t } = useTranslation('common');

  return (
    <Layout
      seo={{
        title: 'Footwear | QuackStore',
        description: 'Footwear  | QuackStore',
        canonicalUrl: 'https://quackstore.com/footwear',
      }}
    >
      <section className=" flex items-center px-44 justify-center bg-grey-200">
        <article className="flex flex-col gap-4 ">
          <h1 className="heroTitle text-primary font-bold leading-[80px] tracking-tighter">
            {t('heroTitle')}
          </h1>
          <p className="text-grey-500 max-w-tablet-container">
            We offer the best deals in our shop. Check them out now. We have awesome stuff
            on sale for you.
          </p>
          <Button type="secondary">Shop Now</Button>
          <div className="flex gap-10 mt-20">
            <div className="flex gap-3 items-center">
              <Icon name="green-tick" width="28px" height="28px" />
              <p className="text-grey-500">Free shipping</p>
            </div>
            <div className="flex gap-3 items-center">
              <Icon name="green-tick" width="28px" height="28px" />
              <p className="text-grey-500">Free return</p>
            </div>
          </div>
        </article>
        <figure>
          <Image
            src="/assets/images/heroImage.svg"
            alt="hero shoes"
            width={1000}
            height={990}
          />
        </figure>
      </section>
      <section className="mt-32">
        <Featured title="Featured products" products={products} />
      </section>
    </Layout>
  );
};

export default Footwear;
