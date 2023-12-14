import { Route, Routes } from "react-router-dom"
import ArticlesList from "./ArticlesList"
import SingIn from './SignIn'
import DetailArticle from "./DetailArticle.jsx"
import CommentsList from "./CommentsList.jsx"
import { useState } from "react";


function Body() {
    const [currUser, setCurrUser] = useState(null)
    return (
        <div>
            <Routes>
                <Route path="/" element={<ArticlesList />} />
                <Route path="/signin" element={<SingIn currUser={ currUser} setCurrUser={setCurrUser} />} />
                <Route path="/detailarticle/:article_id" element={<DetailArticle />} /> 
                <Route path="/commentslist/:article_id" element={<CommentsList />} /> 
              {  <Route path="/*" element={ <p className='error'> erro path</p>} />}
            </Routes>
            </div>
)
 }

 export default Body