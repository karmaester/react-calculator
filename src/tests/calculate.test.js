import calculate from '../logic/calculate';

const defaultValue = {
  total: null,
  next: null,
  operation: null,
};

const SumNumbs = {
  total: '100',
  next: '90',
  operation: '+',
};

const SumNumbsWrong = {
  total: '100',
  next: null,
  operation: '+',
};

const nextNumberNull = {
  total: '50',
  next: null,
  operation: '+',
};

const nullOperation = {
  total: '80',
  next: '20',
  operation: null,
};

describe('calculate', () => {
  it('should return an empty object', () => {
    const emptyvalue = calculate(SumNumbs, 'AC');
    expect(emptyvalue).toEqual(defaultValue);
  });

  it('should return the value when adding two numbers', () => {
    const addTwo = calculate(SumNumbs, '=');
    expect(addTwo).toEqual({
      total: '190',
      next: null,
      operation: null,
    });
  });

  it('should set total to null', () => {
    const addTwo = calculate(SumNumbsWrong, '=');
    expect(addTwo).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should add the next number to the operation', () => {
    const nextNumber = calculate(nextNumberNull, '25');
    expect(nextNumber).not.toEqual({
      total: '50',
      next: '25',
      operation: '+',
    });
  });

  it('should return the result of the operaton with the oppsoti sign', () => {
    const oppositeSign = calculate(nullOperation, '+/-');
    expect(oppositeSign).toEqual({
      total: -80,
      next: -20,
      operation: null,
    });
  });
});
