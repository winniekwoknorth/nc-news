import { getDetailNews } from "../utils.js";
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";

function DetailArticle() {
  const { article_id } = useParams()
  const [detailArticle, setDetailArticle] = useState("");
  const [err, setErr]= useState(null)
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
   
    if (article_id) {
      getDetailNews(article_id)
        .then((result) => {
          setDetailArticle(result);
          setIsLoading(false)
        })
        .catch((err) => {
          setIsLoading(false)
          setErr(err)
  })
    }
  }, []);
  if (isLoading) {
    return <>Loading...</>;
  }
  
  if (err) {
    return <>{err.message}</>
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
      <h3>{detailArticle.title}</h3>
      <img src={detailArticle.article_img_url} alt={detailArticle.title} className='responsive' />
      <p className='articleBody responsive' >{detailArticle.body}</p>
      <p className='sub' >created by {detailArticle.author}</p> 
      <p className='sub' >created at {datestring}</p>
      <p className='sub' >votes:{detailArticle.votes}</p>
    </div>
  );
}

export default DetailArticle;
