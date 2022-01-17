import Head from "next/head";

export default function Home({ article }) {
  return (
    <div>
      <Head>
        <title>Web dev with next</title>
        <meta name="keyword" content="Web development programming" />
      </Head>
      {article.map((article) => (
        <h3>{article.title}</h3>
      ))}
    </div>
  );
}
export const getStaticProps = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const article = await response.json();

  return {
    props: {
      article,
    },
  };
};
