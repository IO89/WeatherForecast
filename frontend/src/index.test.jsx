const index = require('./index.jsx');
const expect = require('expect');


it('is a function', () => {
  const result = index.getLocation();
    expect(result).toBeA('function');
});

