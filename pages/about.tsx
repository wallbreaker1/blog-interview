import AboutSection from '@/components/AboutSection';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About This Project</title>
        <meta name="description" content="Details about the Interview Project built with Next.js and Tailwind CSS." />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <AboutSection />
      </main>
    </>
  );
}