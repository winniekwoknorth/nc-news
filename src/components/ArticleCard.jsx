function ArticleCard({article }) {
    return (
        <div className ='ArticleCard'>
            <h3>{article.article_id}</h3>
            <h3>{article.title}</h3>
            <img  src={article.article_img_url} alt={article.title } className='responsive'/>
            

        </div>
    )
}

export default ArticleCard