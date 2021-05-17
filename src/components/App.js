/* eslint-disable no-unused-vars */
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';
import Navbar from './Navbar';

const App = () => (
  <main>
    <Navbar />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Calculator" component={Calculator} exact />
      <Route path="/Quote" component={Quote} exact />
    </Switch>
  </main>
);
export default App;
/* eslint-enable no-unused-vars */
