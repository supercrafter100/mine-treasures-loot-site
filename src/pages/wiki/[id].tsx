import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '../../components/layout/Header';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import remarkHint from 'remark-hint';
import remarkSlug from 'rehype-slug';

const Wiki = () => {

  const router = useRouter();
  const { id: pageId } = router.query;

  const [markdownData, setMarkdownData] = useState("");
  useEffect(() => {
    if (pageId) {
      fetch('/api/wiki/' + pageId).then((res) => res.text()).then((text) => setMarkdownData(text))
    }
  }, [pageId]);

  return (
    <>
      <Head>
        <title>Mine Treasure | Download</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-white px-6 lg:px-24 py-6 h-screen">
        <Header />
        <main className="mx-auto w-full prose" id={"wiki"}>
          {markdownData.length && (<>
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkToc, remarkHint]} rehypePlugins={[remarkSlug]}>{markdownData}</ReactMarkdown>
          </>)}
        </main>
      </div>
    </>
  )
}

export default Wiki