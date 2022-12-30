import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '../../components/layout/Header';
import ErrorPage from 'next/error';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import remarkHint from 'remark-hint';
import remarkSlug from 'rehype-slug';
import { Collapse } from 'react-collapse';

import sidebar from '../../../wiki/sidebar.json';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const { library } = require('@fortawesome/fontawesome-svg-core')
import { fas } from '@fortawesome/free-solid-svg-icons';
import remarkMcItem from '../../utils/remarkPlugins/mcItem';

const Wiki = ({ sidebarData }) => {

  library.add(fas);

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
      {markdownData === '{"message":"Not found"}' && <ErrorPage statusCode={404} />}
      {markdownData !== '{"message":"Not found"}' &&
        <div className="bg-white px-6 lg:px-24 py-6 h-screen">
          <Header />
          <WikiSidebar sidebarData={sidebarData} activePage={"/" + pageId} />

          <main className="mx-auto w-full prose" id={"wiki"}>
            {markdownData.length && (<>
              <ReactMarkdown remarkPlugins={[remarkGfm, remarkToc, remarkHint, remarkMcItem]} rehypePlugins={[remarkSlug]}>{markdownData}</ReactMarkdown>
            </>)}
          </main>
        </div>
      }
    </>
  )
}

const WikiSidebar = ({ sidebarData, activePage }) => {
  return (
    <aside className="w-full sm:w-[60%] sm:mx-auto xl:w-64 xl:float-right mt-24">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded">
        <h1 className="font-bold text-xl text-center mb-3">Sections</h1>
        <ul className="space-y-2">
          {sidebarData.map((elem, idx) => <WikiSidebarSection key={idx} sidebarSectionData={elem} activePage={activePage} />)}
        </ul>
      </div>
    </aside>
  )
}

const WikiSidebarSection = ({ sidebarSectionData, activePage }) => {
  const [isDroppedDown, setIsDroppedDown] = useState(sidebarSectionData.children.some(child => child.link === activePage));
  return (
    <li>
      <button onClick={() => setIsDroppedDown(!isDroppedDown)} type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100">
        {sidebarSectionData.icon && <FontAwesomeIcon icon={sidebarSectionData.icon} />}
        <span className="flex-1 ml-3 text-left whitespace-nowrap">{sidebarSectionData.title}</span>
        {sidebarSectionData.collapsable && <svg className={"w-6 h-6 transition duration-100 " + (!isDroppedDown ? "rotate-90" : "")} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>}
      </button>
      <Collapse isOpened={sidebarSectionData.collapsable ? isDroppedDown : true}>
        <ul className="py-2 space-y-2">
          {sidebarSectionData.children.map((child, idx) => (
            <li key={idx}>
              <Link href={"/wiki" + (child.link.startsWith('/') ? '' : '/') + child.link} className={"flex items-center p-2 pl-11 w-full text-base font-normalrounded-lg transition text-gray-900 duration-75 group hover:bg-gray-100" + (activePage === child.link ? " font-bold" : "")}>{child.name}</Link>
            </li>
          ))}
        </ul>
      </Collapse>
    </li>
  )
}

export async function getServerSideProps({ params }) {

  return {
    props: {
      sidebarData: sidebar,
    }
  }
}

export default Wiki