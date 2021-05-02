/* eslint-disable no-unused-vars */
import './App.css';
import Header from './Header';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
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
