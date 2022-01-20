import Link from 'next/link';
import Articlestyle from '../styles/Article.module.css';

const ArticleItem = (article) => {
    return(
        <div>
            <Link href="/article/[id]" as={`/article/${article.id}`}>
                <a className={Articlestyle.card}></a>
                <h3>{article.title} &rarr;</h3>
                <p>{article.body}</p>
            </Link>
        </div>
    )
}

export default ArticleItem;
