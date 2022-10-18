import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import i18n from '../i18n';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Determines if we are running on server or in client.
const isServerSideRendered = () => {
  return typeof window === 'undefined';
};

/**
 * Accessibility tool - outputs to devtools console on dev only and client-side only.
 * @see https://github.com/dequelabs/axe-core-npm
 */
if (process.env.NODE_ENV !== 'production' && !isServerSideRendered()) {
  import('react-dom').then(ReactDOM => {
    import('@axe-core/react').then(axe => {
      axe.default(React, ReactDOM, 1000, {});
    });
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    if (router.locale) {
      i18n.changeLanguage(router.locale);
    }
  }, [router.locale]);
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}

export default appWithTranslation(MyApp);
