import { Route, Routes } from "react-router-dom"
import ArticlesList from "./ArticlesList"
import SingIn from './SignIn'
import DetailArticle from "./DetailArticle.jsx"
import CommentsList from "./CommentsList.jsx"

function Body() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ArticlesList />} />
                <Route path="/signin" element={<SingIn />} />
                <Route path="/detailarticle" element={<DetailArticle />} />
                <Route path="/commentslist" element={<CommentsList />} />
                
             </Routes>
            </div>
)
 }

 export default Body