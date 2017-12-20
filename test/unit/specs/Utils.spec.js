import {go} from './test'
import fff from '../../../src/utils/utils'

describe('utils.js', () => {
  it('should render correct js', () => {
    expect(go()).to.equal('go')
    expect(fff.goo()).to.equal(124)
    expect(fff.forward()).to.equal('forward')
  })
})
