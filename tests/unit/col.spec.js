import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import Col from '../../src/col'
chai.use(sinonChai)

describe('Col.vue', () => {
  it('存在.', () => {
    expect(Col).to.exist
  })
})