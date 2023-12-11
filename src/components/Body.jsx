import { Route, Routes } from "react-router-dom"
import ArticlesList from "./ArticlesList"
import SingIn from './SignIn'

function Body() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ArticlesList />} />
                <Route path="/signin" element={<SingIn />} />
             </Routes>
            </div>
)
 }

 export default Body