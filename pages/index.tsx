import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/Layout/Layout';
import Box from '../components/Box/Box';
import Button from '../components/Button/Button';
import Divider from '../components/Divider/Divider';
import Heading from '../components/Heading/Heading';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Skills from '../components/Skills/Skills';

interface Props {
  allPostsData: PostData[];
}
interface PostData {
  date: string;
  title: string;
  id: string;
}

export default function Home({ allPostsData }: Props) {
  const title = 'plnichols.com | UI • Front-End • Javascript • React';
  const description = "Hi, I'm Pierre Luc Nichols, a Front End Developer based in London, UK";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#007baf" />
        <meta name="msapplication-TileColor" content="#007baf" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700,900" />
      </Head>

      <Layout>
        <Box mt={50}>
          <Hero>
            <Heading h1>Hi</Heading>
            <Heading h2>I'm Pierre Luc Nichols</Heading>
            <Heading h3>Front End Developer</Heading>
            <Heading h4>London, UK</Heading>
          </Hero>

          <Divider top={80} bottom={80} />

          <Heading h2>Skills</Heading>
          <Heading h3>Here's an overview of the technologies I'm particularly good at:</Heading>

          <Box my={60}>
            <Skills />
          </Box>

          <Divider top={80} bottom={80} />

          <Box my={60}>
            <Heading h2>Let's talk!</Heading>
            <Heading h3>Get in touch to enquire about my availability</Heading>

            <Box my={30}>
              <Button anchor white outline href="mailto:pierrelucnichols&#64;gmail&#46;com">
                Email me
              </Button>
            </Box>
          </Box>
        </Box>

        <Footer />

        {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section> */}
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
