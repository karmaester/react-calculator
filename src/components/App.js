/* eslint-disable no-unused-vars */
import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  const [calculator, setCalculator] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (operation) => {
    setCalculator(calculate(calculator, operation));
  };

  const { total, next, operation } = calculator;

  return (
    <>
      <Header title="Math Magicians" />
      <div className="calculator">
        <Display
          result={
          `${total || ''}
          ${operation || ''}
          ${(total && next) || ''}`
          }
        />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
}

export default App;
/* eslint-enable no-unused-vars */
