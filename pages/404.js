import Link from 'next/link';
import Container from '../components/container';
import Intro from '../components/intro';
import Layout from '../components/layout';
import Head from 'next/head';
import { getAllPosts } from '../lib/api';
import HeroPost from '../components/hero-post';

export default function FourOhFour({ allPosts }) {

  const randomPost = allPosts[Math.floor(Math.random() * allPosts.length)];

  return <>
    <Layout>
      <Head>
        <title>Filip Troníček's blog</title>
      </Head>
      <Container>
        <Intro />
        <div style={{ fontSize: "2rem" }}>Nothing here gamers, maybe check the article below. </div>
        <div style={{marginBottom: "35px"}}>
          If it begs you why you would ever do that,
          and why there is a random article below,
          it is because I was very lazy on a chilly Sunday night and didn't want to solve any real bugs or fix other issues.
          I wanted to have fun, so I made a 404...
        </div>
        <HeroPost
          title={randomPost.title}
          coverImage={randomPost.coverImage}
          date={randomPost.date}
          author={randomPost.author}
          slug={randomPost.slug}
          excerpt={randomPost.excerpt}
        />
      </Container>
    </Layout>
  </>
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
