/* eslint-disable no-unused-vars */
import './App.css';
import Big from 'big.js';
import Header from './Header';

function App() {
  const x = new Big(123.4567);
  return (
    <div className="App">
      <Header title="Math Magicians" />
    </div>
  );
}

export default App;
/* eslint-enable no-unused-vars */
