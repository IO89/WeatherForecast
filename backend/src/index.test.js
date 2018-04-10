// Configure enviroment
const ENV = process.env.NODE_ENV || 'test';
const SERVER = require('./index');
const PATH = 'http://0.0.0.0:9000/api/forecast';
const LAT = '60.15611260000001';
const LON = '24.9099363';
// Require and configure the assertion library
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

// Test return status ok and response supposed to be Json object
describe(`GET ${PATH}/${LAT}&${LON}`, () => {
  it('Should return status ok and JSON format', done => {
    chai
        .request(`${PATH}`)
        .get(`/${LAT}&${LON}`)
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.eql(200);
          res.type.should.eql('application/json');
          done();
        });
  });
});
