const initialState = {
  files: [], // Todos los archivos
  filteredFiles: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILES':
      return {
        ...state,
        files: action.payload,
        filteredFiles: action.payload
      }
    default:
      return state
  }
}

export default rootReducer
