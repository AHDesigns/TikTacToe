import fetchMock from 'fetch-mock';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

import * as api from '../api';

chai.use(chaiAsPromised);

const expect = chai.expect;

chai.should();

describe('SAGA API CALLS', () => {
  describe('GET', () => {
    before((done) => {
      fetchMock.get('/api...', {test: 'test'});
      done();
    });
    afterEach((done) => {
      fetchMock.reset();
      done();
    });
    after((done) => {
      fetchMock.restore();
      done();
    });
    it('should call /api... and do Something', (done) => {
      api.getSomething().catch((e) => {
        done.fail(e);
      });
      expect(fetchMock.called('/api...')).to.equal(true);
      done();
    });
  });
  // describe('POST', () => {
  //   afterEach((done) => {
  //     fetchMock.restore();
  //     done();
  //   });
  //   it('should call the elastic search api with correct paramaters', (done) => {
  //     fetchMock.post('/api/v1/elasticsearch', {test: 'test'});
  //     api.getErrors('CI', 'query test', 3).catch((e) => {
  //       done.fail(e);
  //     });
  //     expect(fetchMock.called('/api/v1/elasticsearch')).to.equal(true);
  //     expect(JSON.parse(fetchMock.lastOptions().body)).to.deep.equal({env: 'CI', query: 'query test', time: 3});
  //     done();
  //   });
  // });
});
