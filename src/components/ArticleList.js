import Article from "./Article";

function ArticleList({posts}) {

return (
    <main>
    {posts.map((article) => {
        return(
          <Article
            key={article.id}
            title={article.title}
            date={article.date}
            preview={article.preview}
            minutes={article.minutes}
          />
        )
    })}
    </main>
)
}

export default ArticleList;