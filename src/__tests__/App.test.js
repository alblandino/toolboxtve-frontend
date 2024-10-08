import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import store from '../redux/store'
import App from '../App'

describe('Componente inicial', () => {
  test('renderiza la aplicacion de react', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    // Verificar que se renderiza correctamente el texto de la barra de navegación
    const navbarText = screen.getByText(/React Test App/i)
    expect(navbarText).toBeInTheDocument()
  })
})
