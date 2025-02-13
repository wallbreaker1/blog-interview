import type { AppProps } from 'next/app';
import NavBar from '@/components/NavBar';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}