import FollowerContext from "./followersContext"
import {useState} from  "react"
const FollowerProvider = ({children}) => {
    const [followers, setFollowers] = useState([])

    const context = { followers, setFollowers}
    
 return(
    <FollowerContext.Provider value={ context }>
      {children}
    </FollowerContext.Provider>
 )
}

export default FollowerProvider