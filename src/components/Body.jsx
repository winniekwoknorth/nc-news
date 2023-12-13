import { Route, Routes } from "react-router-dom"
import ArticlesList from "./ArticlesList"
import SingIn from './SignIn'
import DetailArticle from "./DetailArticle.jsx"
import CommentsList from "./CommentsList.jsx"
import {useState} from "react";

function Body() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ArticlesList />} />
                <Route path="/signin" element={<SingIn />} />
                <Route path="/commentslist" element={<CommentsList />} />
                <Route path="/detailarticle/:article_id" element={<DetailArticle />} /> 
            </Routes>
            </div>
)
 }

 export default Body