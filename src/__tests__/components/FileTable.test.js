/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import FileTable from '../../components/FileTable'

describe('Componente: FileTable', () => {
  const datosMockeados = [
    { fileName: 'test1.csv', text: 'test1', number: 123, hex: '#FF0000' },
    { fileName: 'test2.csv', text: 'test2', number: 456, hex: '#00FF00' }
  ]

  it('debe renderizar el componente correctamente con los datos', () => {
    render(<FileTable data={datosMockeados} />)

    // Verificar que la tabla esté presente
    expect(screen.getByText('File Name')).toBeInTheDocument()
    expect(screen.getByText('Text')).toBeInTheDocument()
    expect(screen.getByText('Number')).toBeInTheDocument()
    expect(screen.getByText('Hex')).toBeInTheDocument()

    // Verificar que los datos estén presentes en la tabla
    expect(screen.getByText('test1.csv')).toBeInTheDocument()
    expect(screen.getByText('test1')).toBeInTheDocument()
    expect(screen.getByText('123')).toBeInTheDocument()
    expect(screen.getByText('#FF0000')).toBeInTheDocument()

    expect(screen.getByText('test2.csv')).toBeInTheDocument()
    expect(screen.getByText('test2')).toBeInTheDocument()
    expect(screen.getByText('456')).toBeInTheDocument()
    expect(screen.getByText('#00FF00')).toBeInTheDocument()
  })

  it('debe renderizar una fila por cada dato', () => {
    render(<FileTable data={datosMockeados} />)
    // Verificar que existan filas de datos
    const rows = screen.getAllByRole('row')
    expect(rows.length).toBe(3) // 1 encabezado + 2 lineas de datos
  })
})
