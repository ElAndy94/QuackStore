import Link from 'next/link';
import Layout from '../components/Layout';

function Error({ statusCode }: { statusCode: number }) {
  return (
    <Layout seo={{ title: 'Server Error - QuackStore' }}>
      <div className="flex flex-col w-full h-screen justify-center items-center py-16">
        <div className="container">
          <div className="w-full lg:w-1/2 mt-8">
            <h3>{statusCode}</h3>
            <p>
              A problem has occurred whilst trying to render this page. In the meanwhile,
              you can return to the{' '}
              <Link href="/" passHref>
                <p className="font-medium">homepage.</p>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }: { res: any; err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
