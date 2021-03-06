import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Analytics from '@/components/metrics/Analytics';
import Buttondown from '@/components/metrics/Buttondown';
import Container from '@/components/Container';
import GitHub from '@/components/metrics/Github';
import Gumroad from '@/components/metrics/Gumroad';
import Unsplash from '@/components/metrics/Unsplash';
import YouTube from '@/components/metrics/Youtube';

const url = 'https://douglasmonteiro.dev.br/dashboard';
const title = 'Dashboard – Douglas Monteiro';
const description =
  'My personal dashboard, built with Next.js API routes deployed as serverless functions.';

export default function Dashboard() {
  return (
    <Container>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Esse é o meu dashboard pessoal. Eu uso esse dashboard para monitorar meus números das redes sociais. Want to build your own? Check out my&nbsp;
            <Link href="/blog/fetching-data-with-swr">
              <a className="text-gray-900 dark:text-gray-100 underline">
                blog series.
              </a>
            </Link>
          </p>
        </div>
        <div className="flex flex-col w-full">
          <Unsplash />
          <YouTube />
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <Analytics />
          <GitHub />
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <Gumroad />
          <Buttondown />
        </div>
      </div>
    </Container>
  );
}
