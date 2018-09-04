const chai = require('chai');
const index = require('../index.js');
const expect = chai.expect;
const roman =  index.romanToInt;
const int = index.intToRoman;


describe('romanToInt()', function() {
    it('Deve retornar 1 em algarismo romano', () => {
        expect(roman(1)).to.equal('I');
        
      });
      it('Deve retornar 2 em algarismo romano', () => {
      expect(roman(2)).to.equal('II');
        
  });
  it('Deve retornar 9 em  algarismo romano', () => {
  expect(roman(9)).to.equal('IX');
});
});

describe('romanToInt()', function() {
    it('Deve retornar I em algarismo romano', () => {
        expect(int("I")).to.equal(1);
    });  
        it('Deve retornar V em algarismo romano', () => {
            expect(int("V")).to.equal(5);
        
//   });
//   it('Deve retornar 9 em  algarismo romano', () => {
//   expect(intToRoman(9)).to.equal('IX');
});
});

