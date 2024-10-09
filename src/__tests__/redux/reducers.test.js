import { describe, it, expect } from 'node:test'
import rootReducer from '../../redux/reducers'

describe('Redux Reducers', () => {
  const initialState = {
    files: [],
    filteredFiles: []
  }

  it('debe manejar SET_FILES correctamente', () => {
    const mockFiles = ['test1.csv', 'test2.csv']
    const action = {
      type: 'SET_FILES',
      payload: mockFiles
    }
    const expectedState = {
      files: mockFiles,
      filteredFiles: mockFiles
    }
    const newState = rootReducer(initialState, action)
    // Verificar que el nuevo estado sea el esperado
    expect(newState).toEqual(expectedState)
  })

  it('debe retornar el estado inicial cuando se pasa una acción desconocida', () => {
    const action = { type: 'UNKNOWN_ACTION' }
    const newState = rootReducer(initialState, action)
    expect(newState).toEqual(initialState)
  })
})
