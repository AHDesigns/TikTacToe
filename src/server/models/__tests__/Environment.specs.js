import sinon from 'sinon';
import 'sinon-mongoose';
import { expect } from 'chai';
import Environment from '../Environment.js';
import App from '../App.js';

describe('Environment model', () => {
    describe('getAllEnvs', () => {
        let mock1;
        beforeEach((done) => {
            mock1 = sinon.mock(Environment).expects('find').chain('exec');
            done();
        });
        afterEach((done) => {
            Environment.find.restore();
            done();
        });
        it('Shouldn\'t have any error', (done) => {
            mock1.yields(null, 'lol');
            Environment.getAllEnvs((err) => {
                expect(err).to.be.null;
                done();
            });
        });
        it('Should get an error', (done) => {
            mock1.yields(1, null);
            Environment.getAllEnvs((err) => {
                expect(err).to.equal(1);
                done();
            });
        });
    });
    describe('getSpecificEnvs', () => {
        let mock1;
        beforeEach((done) => {
            mock1 = sinon.mock(Environment).expects('find').chain('exec');
            done();
        });
        afterEach((done) => {
            Environment.find.restore();
            done();
        });
        it('Shouldn\'t have any error', (done) => {
            mock1.yields(null, 'lol');
            Environment.getSpecificEnvs([1, 2, 3], (err) => {
                expect(err).to.be.null;
                done();
            });
        });
        it('Should get an error', (done) => {
            mock1.yields(1, null);
            Environment.getSpecificEnvs([1, 2, 3], (err) => {
                expect(err).to.equal(1);
                done();
            });
        });
    });
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
            Environment.addEnv('env', (err, environment) => {
                expect(mock2.called).to.be.true;
                expect(err).to.equal(null);
                expect(environment).to.have.length.above(0);
                done();
            });
        });
        it('Should return an erros while trying to add an Environment', (done) => {
            mock1.yields(null, []);
            mock2.yields(1, []);
            Environment.addEnv('env', (error) => {
                expect(error).to.equal('failed');
                done();
            });
        });
        it('Should return an error while trying to find if an Environment already exist', (done) => {
            mock1.yields(1, []);
            Environment.addEnv('env', (err) => {
                expect(err).to.equal('failed');
                done();
            });
        });
        it('Should return an error if the environment we\'re trying to add already exist', (done) => {
            mock1.yields(0, [1]);
            Environment.addEnv('env', (err) => {
                expect(err).to.equal('exists');
                done();
            });
        });
    });
    describe('deleteEnv', () => {
        let mock1;
        let mock2;
        let mock3;
        beforeEach((done) => {
            mock1 = sinon.mock(App).expects('find').chain('exec');
            mock2 = sinon.mock(App).expects('deleteApp').atMost(100);
            mock3 = sinon.mock(Environment).expects('find').chain('remove');
            done();
        });
        afterEach((done) => {
            App.find.restore();
            App.deleteApp.restore();
            Environment.find.restore();
            done();
        });
        it('Should return an error while trying to find app with this ID', (done) => {
            mock1.yields(1);
            Environment.deleteEnv(12, (err) => {
                expect(err).to.equal('failed');
                done();
            });
        });
        it('Should return an Error if error during deleting app', (done) => {
            mock1.yields(0, ['l', 'o', 'l']);
            mock2.yields(1);
            Environment.deleteEnv(10, (err) => {
                expect(mock1.called).to.be.true;
                expect(err).to.equal('apps not deleted');
            });
            done();
        });
        it('Should return an error during deleting an Environment', (done) => {
            mock1.yields(0, ['l', 'o', 'l']);
            mock2.yields(0);
            mock3.yields(1);
            Environment.deleteEnv(10, (err) => {
                expect(err).to.equal('env not deleted');
                done();
            });
        });
        it('Should return the ID of the environment deleted', (done) => {
            mock1.yields(0, ['l', 'o', 'l']);
            mock2.yields(0);
            mock3.yields(0, 10);
            Environment.deleteEnv(10, (err, id) => {
                expect(err).to.be.null;
                done();
            });
        });
    });
    describe('editEnv', () => {
        let mock1;
        let mock2;
        beforeEach((done) => {
            mock1 = sinon.mock(Environment).expects('find').chain('where').chain('exec');
            mock2 = sinon.mock(Environment).expects('findById')
            done();
        });
        afterEach((done) => {
            Environment.find.restore();
            Environment.findById.restore();
            done();
        });
        it('Should return an error while trying to edit env', (done) => {
            mock1.yields(1);
            Environment.editEnv(10, 'lol', (err) => {
                expect(err).to.equal('failed');
                done();
            });
        });
        it('Should return an error if the environment we\'re trying to edit already exist', (done) => {
            mock1.yields(0, [1]);
            Environment.editEnv(10, 'env', (err) => {
                expect(err).to.equal('exists');
                done();
            });
        });
        it('Should return an error \'findById\' function', (done) => {
            mock1.yields(0, []);
            mock2.yields(1, {});

            Environment.editEnv(10, 'lol', (err) => {
                expect(err).to.equal('failed');
                done();
            });
        });
        it('Should return an error while trying to save this new Environment', (done) => {
            mock1.yields(0, []);
            mock2.yields(0, { name: '/endpoint', save: (callback) => { callback(1, {}); } });
            Environment.editEnv(10, 'env', (err, updatedEnv) => {
                expect(err).to.equal('failed');
                done();
            });
        });
        it('Should return the updated Environment', (done) => {
            mock1.yields(0, []);
            mock2.yields(0, { name: '/endpoint', save: (callback) => { callback(0, { lol: 'xD' }); } });
            Environment.editEnv(10, 'env', (err, updatedEnv) => {
                expect(err).to.be.null;
                expect(updatedEnv).to.not.be.null;
                done();
            });
        });
    });
});
