import { useParams } from 'react-router-dom';
import { UseFetch } from '../../hooks/UseFetch';

function ArticlesDetail() {
  const { id } = useParams();
  const url = 'http://localhost:3000/articles/' + id;
  const { data: article, error, isPending } = UseFetch(url);
  console.log(id);
  return (
    <div>
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {article && (
        <>
          <img src={article.image} alt={article.title} height="300" />
          <h2>Title: {article.title}</h2>
          <p>
            <b>Author:</b> {article.author}
          </p>
          <p>{article.body}</p>
        </>
      )}
    </div>
  );
}

export default ArticlesDetail;
