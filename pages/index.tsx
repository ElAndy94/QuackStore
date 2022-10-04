import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout
      seo={{
        title: 'Footware | QuackStore',
        description: 'Footware Stock | QuackStore',
        canonicalUrl: 'https://quackstore.com/footware',
      }}
    >
      Footware
    </Layout>
  );
};

export default Home;
