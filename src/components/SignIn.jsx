import { useState, useEffect , useContext} from "react";
import { getAllUsers } from "../utils.js";
import SignInCard from './SignInCard.jsx'
//import { useUser } from './Body.jsx'
import { CurrUserContext} from './Body.jsx'

function SignIn() {
   
    const { currUser, setCurrUser } = useContext(CurrUserContext)
    console.log(currUser)
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState(null)
    const [users, setUsers]=useState([])
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
    const logOut = () => {
        setCurrUser(null)
    }
    return (<div>
        < h2 > Users List</h2 >
        <button onClick={logOut }>SignOut</button>
        {users.map((user) => {
            return <SignInCard user={user} key={user.username} currUser={ currUser} setCurrUser ={ setCurrUser }/>
        }) }

        </div>)
}
export default SignIn