var expect = require('chai').expect;
const index = require('./bin/index');
describe('index.js tests', function () {
  describe('checkValidPosition() Test', function () {
    it('should return true', function () {
      const result = index.checkValidPosition('1,1');
      expect(result).to.equal(true);
    });
    it('should return false', function () {
      const result = index.checkValidPosition('1.1');
      expect(result).to.equal(false);
    });
    it('should return false', function () {
      const result = index.checkValidPosition('1,4');
      expect(result).to.equal(false);
    });
    it('should return false', function () {
      const result = index.checkValidPosition('4,1');
      expect(result).to.equal(false);
    });
    it('should return false', function () {
      const result = index.checkValidPosition('1');
      expect(result).to.equal(false);
    });
  });
});