/* eslint-disable no-unused-vars */
import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const calcResult = calculate(this.state, buttonName);
    this.setState(calcResult);
  }

  render() {
    const { total, next, operation } = this.state;
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
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </>
    );
  }
}

export default App;
/* eslint-enable no-unused-vars */
