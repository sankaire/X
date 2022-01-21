import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home({ article }) {
  console.log(article)
  return (
    <div>
      <Head>
        <title>Web dev with next</title>
        <meta name="keyword" content="Web development programming" />
      </Head>
      <ArticleList article={article} />
    </div>
  );
}

export async function getServerSideProps(){
  //fetch data from an external api
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const article = await res.json()
  //pas the data to the page

  return{props:{article}}
}

