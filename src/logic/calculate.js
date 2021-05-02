import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  let result;
  const symbols = ['÷', '*', '-', '+'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

  if (buttonName === '=') {
    result = {
      total: operate(total, next, operation),
      next: null,
      operation: null,
    };
  }

  if (buttonName === '+/-') {
    result = {
      total: total * -1,
      next: next * -1,
      operation: null,
    };
  }

  if (buttonName === 'AC') {
    result = {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (buttonName === '%') {
    result = {
      total: total * (next / 100),
      next: null,
      operation: null,
    };
  }

  return result;
};

export default calculate;
