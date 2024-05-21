import { useState } from 'react';
import CurrentUserContext from './current-user-context';

export default function CurrentUserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isRep, setIsRep] = useState()
  const context = { currentUser, setCurrentUser, isRep, setIsRep};
   
  return (
    <CurrentUserContext.Provider value={ context }>
      {children}
    </CurrentUserContext.Provider>
  );
}
