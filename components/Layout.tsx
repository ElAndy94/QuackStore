import Head from 'next/head';
import meta from './../meta.config';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children: React.ReactNode;
  seo?: {
    title: string;
    description?: string;
    canonicalUrl?: string;
    image?: string;
  };
}

export default function Layout({ children, seo }: Props): JSX.Element {
  return (
    <>
      {seo && (
        <Head>
          <meta name="robots" content="follow, index" />
          <meta property="og:site_name" content={meta.openGraph.site_name} />
          <meta property="og:locale" content="en-GB" />
          <meta property="og:type" content="website" />
          <title>{seo.title || meta.title}</title>
          <meta content={seo.description || meta.description} name="description" />
          <meta property="og:title" content={seo.title || `${meta.title} | QuackStore`} />
          <meta property="og:description" content={seo.description || meta.description} />
          {seo.canonicalUrl && (
            <>
              <meta property="og:url" content={seo.canonicalUrl} />
              <link rel="canonical" href={seo.canonicalUrl} />
            </>
          )}
          <meta property="og:image" content={seo.image || meta.image} />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
      )}
      <div className="flex flex-col min-h-screen ">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
