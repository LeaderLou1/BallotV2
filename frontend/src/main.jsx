import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import UserContextProvider from './contexts/CurrentUserContextProvider.jsx';
import HomePageProvider from './contexts/HomePageProvider.jsx';
import './index.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import UserBioProvider from './contexts/UserBioProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <HomePageProvider>
    <UserBioProvider>
      <BrowserRouter>
        <Theme>
          <App/>
        </Theme>
      </BrowserRouter>
     </UserBioProvider>
    </HomePageProvider>
  </UserContextProvider>,
);
