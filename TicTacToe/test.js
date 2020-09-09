var expect = require('chai').expect;
const index = require('./bin/index');
describe('index.js tests', function () {
  describe('checkValidPosition() Test', function () {
    it('should return true', function () {
      let result = index.checkValidPosition('1,1');
      expect(result).to.equal(true);
    });
    it('should return false', function () {
      let result = index.checkValidPosition('1.1');
      expect(result).to.equal(false);
    });
    it('should return false', function () {
      let result = index.checkValidPosition('1,4');
      expect(result).to.equal(false);
    });
    it('should return false', function () {
      let result = index.checkValidPosition('4,1');
      expect(result).to.equal(false);
    });
    it('should return false', function () {
      let result = index.checkValidPosition('1');
      expect(result).to.equal(false);
    });
  });
  describe('checkVictory() Test',function () {
    let tictactoeBoard = [['-','-','-']
                         ,['-','-','-']
                         ,['-','-','-']];
    it('should return false', function () {
      let result = index.checkVictory(tictactoeBoard);
      expect(result).to.be.false;
    });
    it('should return true', function () {
      tictactoeBoard = [['X','-','-']
                       ,['-','X','-']
                       ,['-','-','X']];
      let result = index.checkVictory(tictactoeBoard);
      expect(result).to.be.true;
    });
    it('should return true', function () {
      tictactoeBoard = [['-','-','-']
                       ,['O','O','O']
                       ,['-','-','-']];
      let result = index.checkVictory(tictactoeBoard);
      expect(result).to.be.true;
    });
    it('should return false', function () {
      tictactoeBoard = [['X','-','-']
                       ,['O','X','O']
                       ,['X','-','O']];
      let result = index.checkVictory(tictactoeBoard);
      expect(result).to.be.false;
    });
  });
});