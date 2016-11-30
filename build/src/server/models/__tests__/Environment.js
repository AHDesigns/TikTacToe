import sinon from 'sinon';
import 'sinon-mongoose';
import {expect} from 'chai';
import Environment from '../myModal.js';

describe('Environment model', () => {
  describe('addEnv', () => {
    let mock1;
    let mock2;
    beforeEach((done) => {
      mock1 = sinon.mock(Environment).expects('find').chain('where').chain('exec');
      mock2 = sinon.mock(Environment).expects('create');
      done();
    });
    afterEach((done) => {
      Environment.find.restore();
      Environment.create.restore();
      done();
    });
    it('Should add an Environment correctly', (done) => {
      mock1.yields(null, []);
      mock2.yields(null, [1]);
      Environment.addStuff('dave', (err, environment) => {
        expect(mock2.called).to.be.true;
        expect(err).to.equal(null);
        expect(environment).to.have.length.above(0);
        done();
      });
    });
  });
});
