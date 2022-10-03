import Link from 'next/link';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      router.push('/');
    }, 4000);
    return () => clearTimeout(timeOutId);
  }, [router]);

  return (
    <Layout seo={{ title: 'Page Not Found - QuackStore' }}>
      <div className="flex flex-col w-full h-screen justify-center items-center">
        <h1>404 - Page Not Found</h1>
        <Link href="/" passHref>
          <p className="font-medium">homepage.</p>
        </Link>
      </div>
    </Layout>
  );
};

export default Custom404;
