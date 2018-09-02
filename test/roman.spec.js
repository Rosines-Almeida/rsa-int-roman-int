const chai = require('chai');
const intToRoman = require('../index.js');
const romantoint = require('../romantoint.js');
// const intToRoman = index.intToRoman;
const expect = chai.expect;
 

describe('intToRoman()', function() {
    it('Deve retornar 1 em algarismo romano', () => {
        expect(intToRoman(1)).to.equal('I');
        
      });
      it('Deve retornar 2 em algarismo romano', () => {
      expect(intToRoman(2)).to.equal('II');
        
  });
  it('Deve retornar 9 em  algarismo romano', () => {
  expect(intToRoman(9)).to.equal('IX');
});
});

describe('romantoint()', function() {
    it('Deve retornar I em algarismo romano', () => {
        expect(romantoint("I")).to.equal(1);
    });  
        it('Deve retornar V em algarismo romano', () => {
            expect(romantoint("V")).to.equal(5);
        
//   });
//   it('Deve retornar 9 em  algarismo romano', () => {
//   expect(intToRoman(9)).to.equal('IX');
});
});

