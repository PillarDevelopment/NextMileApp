import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WebAppProvider } from '@vkruglikov/react-telegram-web-app';
import { useRouter } from 'next/router';

function InitDataProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { initData } = router.query;

  // Monkey-patch router.push/replace чтобы всегда прокидывать initData
  React.useEffect(() => {
    if (!initData) return;
    const origPush = router.push;
    const origReplace = router.replace;
    router.push = (url, as, options) => {
      if (typeof url === 'string') return origPush(url, as, options);
      if (url && typeof url === 'object') {
        if (typeof url.query === 'object' && url.query !== null && !('initData' in url.query)) {
          url.query = { ...url.query, initData };
        }
      }
      return origPush(url, as, options);
    };
    router.replace = (url, as, options) => {
      if (typeof url === 'string') return origReplace(url, as, options);
      if (url && typeof url === 'object') {
        if (typeof url.query === 'object' && url.query !== null && !('initData' in url.query)) {
          url.query = { ...url.query, initData };
        }
      }
      return origReplace(url, as, options);
    };
    return () => {
      router.push = origPush;
      router.replace = origReplace;
    };
  }, [initData, router]);

  return <>{children}</>;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WebAppProvider>
      <InitDataProvider>
        <div className="min-h-screen bg-telegramBg text-white font-sans">
          <Component {...pageProps} />
        </div>
      </InitDataProvider>
    </WebAppProvider>
  );
} 