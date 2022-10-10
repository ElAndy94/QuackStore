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
    const products = await ContentfulApi.getAllShoes();
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
        canonicalUrl: 'https://quackstore.com/footwear ',
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
          <Image src="/assets/heroImage.svg" alt="hero shoes" width={1000} height={990} />
        </figure>
      </section>
      <section className="mt-32">
        <Featured title="Featured products" products={products} />
      </section>
    </Layout>
  );
};

export default Footwear;

type Products = {
  id: number;
  brand: string;
  title: string;
  description: string;
  image: string;
  price: string;
  inStock: boolean;
  colors: string[];
  releaseDate: string;
  numberOfSales: string;
  rating: string;
};

const mockProducts: Products[] = [
  {
    id: 7564,
    brand: 'Adidas',
    title: 'Adidas Originals',
    description: 'Running Footwear',
    image: '/assets/shoe4.svg',
    price: '999',
    inStock: true,
    colors: ['forest-green', 'magenta'],
    releaseDate: '2018-01-01',
    numberOfSales: '23',
    rating: '1',
  },
  {
    id: 7914,
    brand: 'Nike',
    title: 'Nike Air Max 270',
    description: 'Running Footwear',
    image: '/assets/shoe2.svg',
    price: '778',
    inStock: true,
    colors: ['magenta', 'ultra-marine-blue'],
    releaseDate: '2020-01-01',
    numberOfSales: '42',
    rating: '4',
  },
  {
    id: 7834,
    brand: 'Puma',
    title: 'Puma RS-X',
    description: 'Stylish Footwear',
    image: '/assets/shoe3.svg',
    price: '847',
    inStock: true,
    colors: ['magenta', 'orange'],
    releaseDate: '2019-04-01',
    numberOfSales: '12',
    rating: '5',
  },
  {
    id: 7724,
    brand: 'Fila',
    title: 'Fila Disruptor',
    description: 'Men Footwear',
    image: '/assets/shoe2.svg',
    price: '90',
    inStock: true,
    colors: ['primary', 'orange'],
    releaseDate: '2022-02-01',
    numberOfSales: '10',
    rating: '3',
  },
  {
    id: 7624,
    brand: 'Asics',
    title: 'Asics Gel-Lyte',
    description: 'Kids Footwear',
    image: '/assets/shoe2.svg',
    price: '1400',
    inStock: true,
    colors: [],
    releaseDate: '2022-01-01',
    numberOfSales: '22',
    rating: '4',
  },
  {
    id: 7524,
    brand: 'New Balance',
    title: 'New Balance 574',
    description: 'Running Footwear',
    image: '/assets/shoe3.svg',
    price: '10',
    inStock: true,
    colors: ['orange', 'magenta'],
    releaseDate: '2021-01-01',
    numberOfSales: '75',
    rating: '2',
  },
  {
    id: 7424,
    brand: 'Reebok',
    title: 'Reebok Classic',
    description: 'Running Footwear',
    image: '/assets/shoe4.svg',
    price: '150',
    inStock: true,
    colors: ['magenta', 'orange'],
    releaseDate: '2021-01-01',
    numberOfSales: '75',
    rating: '1',
  },
  {
    id: 7324,
    brand: 'Fendi',
    title: 'Fendi Falcon Shoes for men - 2021 Edition',
    description: 'Running Footwear',
    image: '/assets/shoe2.svg',
    price: '65',
    inStock: true,
    colors: ['granite-gray', 'orange'],
    releaseDate: '2021-01-01',
    numberOfSales: '555',
    rating: '1',
  },
];
