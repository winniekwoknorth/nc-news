import { useState, useEffect } from "react";
import { getAllUsers } from "../utils.js";
import SignInCard from './SignInCard.jsx'

function SignIn({ currUser, setCurrUser }) {
    const [users, setUsers]=useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState(null)
    useEffect(() => {
        getAllUsers().then((result) => {
            setUsers(result)
        })
            .then(() => {
            setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
                setErr(err)
        })
        
    }, []);
    
    if(isLoading){
        return <>Loading...</>
          }

    return (<div>
        < h2 > Users List</h2 >
        {users.map((user) => {
            return <SignInCard user={user} key={user.username} currUser={ currUser} setCurrUser ={ setCurrUser }/>
        }) }

        </div>)
}
export default SignIn