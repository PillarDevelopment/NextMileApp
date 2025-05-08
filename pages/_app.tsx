import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WebAppProvider } from '@vkruglikov/react-telegram-web-app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WebAppProvider>
      <div className="min-h-screen bg-telegramBg text-white font-sans">
        <Component {...pageProps} />
      </div>
    </WebAppProvider>
  );
} 