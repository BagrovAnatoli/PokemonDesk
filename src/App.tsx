import React from 'react';
import {useRoutes} from 'hookrouter';
import routes from './routes';
import NotFoundPage from './pages/NotFound';
import Header from './components/Header';
import req from "./utils/request";

const App = () => {
	req();
  const match = useRoutes(routes);

  return match ? (
  	<>
	  	<Header />
	  	{ match }
  	</>
  ) : <NotFoundPage />;
};

export default App;
