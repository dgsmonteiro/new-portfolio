import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import Subscribe from '@/components/Subscribe';
import NewsletterLink from '@/components/NewsletterLink';
import { getAllFilesFrontMatter } from '@/lib/mdx';

const url = 'https://douglasmonteiro.dev.br/newsletter';
const title = 'Newsletter – Douglas Monteiro';
const description =
  'Thoughts on the software industry, programming, tech, videography, music, and my personal life.';

export default function Newsletter({ newsletters }) {
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
          Newsletter
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
        Meu boletim informativo fornece uma visão dos bastidores do que estou trabalhando e sobre as coisas que ando escrevendo. Eu também compartilho sobre artigos e coisas interessantes que encontro na internet.
        </p>
        <Subscribe />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Archive
        </h3>
        <div className="prose dark:prose-dark">
          <ul>
            {newsletters
              .sort(
                (a, b) =>
                  Number(new Date(b.publishedAt)) -
                  Number(new Date(a.publishedAt))
              )
              .map((frontMatter) => (
                <NewsletterLink key={frontMatter.title} {...frontMatter} />
              ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const newsletters = await getAllFilesFrontMatter('newsletter');

  return { props: { newsletters } };
}
