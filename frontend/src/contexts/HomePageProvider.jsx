import { useState } from 'react';
import CurrentUserContext from './current-user-context';
import HomePageContext from './HomePageContext';
import Feed from '../components/Feed';

export default function CurrentUserContextProvider({ children }) {
  const [currentHomePage, setCurrentHomePage] = useState(<Feed />);
  const context = { currentHomePage, setCurrentHomePage };

  return (
    <HomePageContext.Provider value={ context }>
      {children}
    </HomePageContext.Provider>
  )

}