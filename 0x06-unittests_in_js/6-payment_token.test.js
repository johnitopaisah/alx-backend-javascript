const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with the correct response when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => done(err));
  });

  it('should return undefined when success is false', function () {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined;
  });
});
