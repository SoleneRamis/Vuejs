var Percentage = require('../lib/Percentage.js')
var assert = require('chai').assert
var expect = require('chai').expect
require('chai').should()

// itonly = fait un seul test
// it.skip passe le test en pending

describe('Percentage', function() {

  describe('#evolution', function() {

    it('should give an evolution', function() {

     // assert.equal(Percentage.evolution(100, 200), 100)
    //  assert.equal(Percentage.evolution(100, 150), 50)
   //   assert.equal(Percentage.evolution(100, 50), -50)

      Percentage.evolution(100, 200).should.be.equal(100)
      Percentage.evolution(100, 150).should.be.equal(50)
      Percentage.evolution(100, 50).should.be.equal(-50)

    })

    it('should handle 0 evolution', function() {
      assert.equal(Percentage.evolution(0, 100), Infinity)
    })

    it('should roun values', function() {
      assert.equal(Percentage.evolution(30, 100), 233.33)
    })

  })

})

describe('#wait', function() {

  it('should exit', function() {
  //  assert.notEqual(Percentage.wait, undefined)
    expect(Percentage.wait).to.be.a('function')
  })

  it('should wait', function(done) {
    Percentage.wait(50, function(test) {
      // assert.equal(test, 18)
      expect(test).to.equal(18)
      done()
    })
  })
})
