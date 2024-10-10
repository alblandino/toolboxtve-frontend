/* eslint-disable no-undef */
import { setFiles } from '../../redux/actions'

describe('Redux Actions', () => {
  it('debe crear una acción para establecer los archivos', () => {
    const mockFiles = ['test1.csv', 'test2.csv']
    const expectedAction = {
      type: 'SET_FILES',
      payload: mockFiles
    }
    const action = setFiles(mockFiles)
    expect(action).toEqual(expectedAction)
  })
})
