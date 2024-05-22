import UserBioContext from "./UserBioContext"
import { useState } from "react";
const UserBioProvider = ({children}) =>{
    const [isBioSubmitted, setIsBioSubmitted] = useState(false);
    const [bio, setBio] = useState('');
    const context = { 
        isBioSubmitted,
        setIsBioSubmitted,
        bio,
        setBio,
    }
  return(
  <UserBioContext.Provider value={ context }>
    {children}
  </UserBioContext.Provider>
  )
}

export default UserBioProvider