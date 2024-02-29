const calculateNumber = require('./2-calcul_chai.js');
const chai = require('chai');
const excpect = chai.expect;

describe('Calcul', () => {
  it('should return 4', () => {
    excpect(calculateNumber('SUM', 1, 3)).to.be.equal(4);
  });

  it('should return 5', () => {
    excpect(calculateNumber('SUM', 1.5, 3)).to.be.equal(5);
  });

  it('should return -4', () => {
    excpect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4);
  });

  it('should return 0.2', () => {
    excpect(calculateNumber('DIVIDE', 1, 5)).to.be.equal(0.2);
  });
  it('should return error', () => {
    excpect(calculateNumber('DIVIDE', 1.4, 0)).to.be.equal('Error');
  });
});
