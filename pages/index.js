import Head from 'next/head';
import Link from 'next/link';

import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

// export async function getServerSideProps() {   // this for ServerSideRendering
export async function getStaticProps() {          // this for StaticRendering
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Мано најголемиот комита во тиквешкиот регион!</p>
        <p>
          (Овој сајт е само за проба и нема многу врска со легендарниот Мано Влаинката :)
        </p>
        <p>
          Ver. 0.3.6 - Main ver !!!
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>))}
        </ul>
      </section>

    </Layout>
  );
}