/* eslint-disable no-undef */
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import FileFilter from '../../components/FileFilter'

describe('Componente: FileFilter', () => {
  it('debe renderizar el componente correctamente', () => {
    render(<FileFilter onFilter={() => {}} />)
    // Validar que el input y el botón estén renderizados
    expect(screen.getByPlaceholderText('Nombre del archivo')).toBeInTheDocument()
    expect(screen.getByText('Filtrar archivo')).toBeInTheDocument()
  })

  it('debe permitir escribir en el campo de texto', () => {
    render(<FileFilter onFilter={() => {}} />)
    const input = screen.getByPlaceholderText('Nombre del archivo')
    // Simular escritura en el campo de texto
    fireEvent.change(input, { target: { value: 'test1.csv' } })
    expect(input.value).toBe('test1.csv')
  })

  it('debe llamar a la función de filtrado cuando se envía el formulario', () => {
    const onFilterMock = jest.fn()
    render(<FileFilter onFilter={onFilterMock} />)
    const input = screen.getByPlaceholderText('Nombre del archivo')
    const button = screen.getByText('Filtrar archivo')
    // Simular escritura en el campo de texto y envío del formulario
    fireEvent.change(input, { target: { value: 'test1.csv' } })
    fireEvent.click(button)
    expect(onFilterMock).toHaveBeenCalledWith('test1.csv')
  })
})
