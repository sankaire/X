import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

function ArticleList(article) {
  return (
  <div className={articleStyles.grid}>
    {article.map((article) => (
      <ArticleItem article={article}/>
      ))}
  </div>
  )
}

export default ArticleList;
