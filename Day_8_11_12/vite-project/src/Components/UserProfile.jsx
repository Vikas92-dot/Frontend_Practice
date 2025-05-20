import { useState } from "react"

export default function UserProfile(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return<>
        {isAuthenticated ? <h1>User Profile</h1> : <button onClick={()=> setIsAuthenticated(true)}>LogIn</button>}
    </>
}