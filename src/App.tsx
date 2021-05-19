import {useRoutes} from 'hookrouter';
import routes from './routes';

const App = () => {
  console.log('####: Some log');

  const match = useRoutes(routes);

  return match;
};

export default App;
