import { Route, Routes } from "react-router-dom"
import ArticlesList from "./ArticlesList"
import SingIn from './SignIn'
import DetailArticle from "./DetailArticle.jsx"
import CommentsList from "./CommentsList.jsx"
import { useState, createContext, useContext } from "react";

export const CurrUserContext = createContext()
  
export const UserProvider = ({ children }) => { 
  const [currUser, setCurrUser] = useState(null)
  
  return (
    <CurrUserContext.Provider value={{ currUser, setCurrUser }}>
      { children}
    </CurrUserContext.Provider>
  )
}

// export const useUser() =>{
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error('useUser must be used within a UserProvider');
//   }
//   return context;
// }




function Body() {
  //const [currUser, setCurrUser] = useState(null)

  
  
    return (
      <div>
        <UserProvider >
        <Routes>
                <Route path="/" element={<ArticlesList />} />
                <Route path="/signin" element={<SingIn />} />
                <Route path="/detailarticle/:article_id" element={<DetailArticle />} /> 
                <Route path="/commentslist/:article_id" element={<CommentsList />} /> 
              {  <Route path="/*" element={ <p className='error'> erro path</p>} />} 
          </Routes>
          </UserProvider>   
            </div>
)
 }

 export default Body