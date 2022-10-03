import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout
      seo={{
        title: 'QuackStore',
        description: 'QuackStore HomePage',
      }}
    >
      <section>
        <p>hello</p>
      </section>
    </Layout>
  );
};

export default Home;
