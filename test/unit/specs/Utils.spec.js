import fff from '@/utils/utils'

describe('utils.js', () => {
  it('should render correct js', () => {
    console.log('utils', fff)
    expect(fff()).to.equal(124)
  })
})
