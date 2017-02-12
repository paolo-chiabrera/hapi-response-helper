import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

const { expect } = chai;

chai.use(sinonChai);

import Boom from 'boom';

import hapiResponseHelper from '../lib';

describe('hapi-response-helper', function () {
  const callbackSpy = sinon.spy();

  beforeEach(function () {
    callbackSpy.reset();
  });

  it('should expose a function', function () {
    expect(hapiResponseHelper).to.be.a.function;
  });

  describe('when passing an error', function () {
    const FAKE_ERROR = new Error('fake');

    it('should return a Boom.badImplementation', function () {
      const expected = Boom.badImplementation(FAKE_ERROR);

      hapiResponseHelper(FAKE_ERROR, null, callbackSpy);

      expect(callbackSpy).to.have.been.calledWith(expected);
    });
  });

  describe('when NOT passing an error', function () {
    const FAKE_RESPONSE = 'fake';

    it('should return the response', function () {
      hapiResponseHelper(null, FAKE_RESPONSE, callbackSpy);

      expect(callbackSpy).to.have.been.calledWith(FAKE_RESPONSE);
    });
  });
});
