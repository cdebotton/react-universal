import chai from 'chai';
import sinonChai from 'sinon-chai';

chai.should();
chai.use(sinonChai);

describe('Sample Test', () => {
  it('should pass', () => {
    const answer = 2;
    (1 + 1).should.equal(answer);
  });

  it('should not pass', () => {
    const answer = 2;
    ((1 + 3).should.equal.bind(null, answer)).should.throw;
  });
});
