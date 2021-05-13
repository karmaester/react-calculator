/* eslint-disable no-unused-vars */
import './App.scss';
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [value, setValue] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickHandler = (buttonName) => {
    const newResult = calculate(value, buttonName);
    setValue({
      ...newResult,
    });
  };

  return (
    <>
      <div className="calculator">
        <Display
          result={
            `${value.total || ''}
            ${value.operation || ''}
            ${(value.total && value.next) || ''}`
            }
        />
        <ButtonPanel clickHandler={clickHandler} />
      </div>
    </>
  );
};
export default App;
/* eslint-enable no-unused-vars */
