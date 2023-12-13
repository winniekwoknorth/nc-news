import { getDetailNews } from "../utils.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailArticle() {
  const [detailArticle, setDetailArticle] = useState("");
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (article_id) {
      getDetailNews(article_id)
        .then((result) => {
          setDetailArticle(result);
        })
        .then(() => {
          setIsLoading(false);
        });
    }
  }, []);
  if (isLoading) {
    return <>Loading...</>;
  }

  var d = new Date(detailArticle.created_at);

  var datestring =
    d.getDate() +
    "-" +
    (d.getMonth() + 1) +
    "-" +
    d.getFullYear() +
    " " +
    d.getHours() +
    ":" +
    d.getMinutes();
    
  return (
    <div className="DetailArticle">
      <img
        src={detailArticle.article_img_url}
        alt={detailArticle.title}
        className="responsive"
      />
      <section>{detailArticle.body}</section>
      <p className='sub' >created by {detailArticle.author}</p> 
      <p className='sub' >created at {datestring}</p>
      <p className='sub' >votes:{detailArticle.votes}</p>
    </div>
  );
}

export default DetailArticle;
