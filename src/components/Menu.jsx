import React from "react"
import { Link } from "react-router-dom"
import ArticlesList from "./ArticlesList"
import SignIn from "./SignIn"

function Menu() {
 return(    
<nav>
         <Link to="/">Articles</Link>
         <p></p>
         <Link to="signin">Sign In</Link>
 
</nav>
      )
}

export default Menu
