/* eslint-disable no-unused-vars */
import './App.css';
import Big from 'big.js';
import Header from './Header';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  const x = new Big(123.4567);
  return (
    <>
      <Header title="Math Magicians" />
      <div className="calculator">
        <Display />
        <ButtonPanel />
      </div>
    </>
  );
}

export default App;
/* eslint-enable no-unused-vars */
