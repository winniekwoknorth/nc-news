function SignInCard({ user, currUser, setCurrUser }) {
    
    const handleSignIn = () => {
        setCurrUser(user.username)
        console.log(currUser)
 }   
 
    return (
        <div className='SignInCard'>
            <p>{user.username}</p>
            <p>{user.name}</p>
            <img className='responsive' src={user.avatar_url} alt={ user.username} />
            
            <button id={user.username}  onClick={handleSignIn}  >Sign in</button>
            <p>{currUser === user.username ? <>you have logged in as { currUser}</> : <></> }</p>
        </div>
    )
}

export default SignInCard