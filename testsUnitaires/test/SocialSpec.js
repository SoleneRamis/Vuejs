// stub = modifier une fonction
// spy = écouter une fonctionn
// mock = modifier et écouter une fonctionn

var chai = require('chai')
var expect = chai.expect
var chaiAsPromides = require('chai-as-promised')
chai.use(chaiAsPromides)

var sinon = require('sinon')
var Promise = require('promise')
var expect = require('chai').expect

var Social = require('../lib/Social')

describe('Social', function() {

  var url = "http://grafikart.fr"

  it('should have twitter_url', function() {
    expect(Social).to.have.property('twitter_url')
  })

  it('should have facebook_url', function() {
    expect(Social).to.have.property('facebook_url')
  })

  describe('#getTwitterCount', function() {

    afterEach(function() {
      if(Social.callAPI.restore) {
        Social.callAPI.restore()
      }
    })

    it('should be a function', function() {
      expect(Social.getTwitterCount).to.be.a('function')
    })

    it('should call callAPI', function() {
      sinon.spy(Social, 'callAPI')
      Social.getTwitterCount(url)
      expect(Social.callAPI.withArgs(Social.twitter_url + url).calldOnce)
      Social.callAPI.restore()
    })

    it('should return count', function(done) {
      var stub = sinon.stub(Social, 'callAPI')

      stub.returns(new Promise(function(resolve, reject) {
        resolve({count: 3})
      }))
      return expect(Social.getTwitterCount(url)).to.enventually.be.equal(3)
    })
  })

  describe('#getFacebookCount', function() {

    it('should return shares', function(done) {
      var mock = sinon.mock(Social)
      mock.expects('callAPI')
        .once()
        .withArgs(Social.facebook_url + url)
        .resolves({shares: 10})
      return expect(Social.getFacebookCount(url)).to.eventually.equal(10)
      mock.verify()
      mock.restore()
    })
  })
})
