import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Navbar, Spinner } from 'react-bootstrap'
import axios from 'axios'
import logo from '../public/logo.png' // Logo de toolbox
import FileTable from './components/FileTable'
import FileFilter from './components/FileFilter'
import { setFiles } from './redux/actions'

const App = () => {
  const dispatch = useDispatch()
  const files = useSelector((state) => state.filteredFiles)
  const [loading, setLoading] = useState(false) // Estado para el loader

  // Obtener los datos de la API al cargar el componente o cuando se filtra
  const fetchFiles = async (fileName = '') => {
    setLoading(true)
    try {
      let response
      if (fileName) {
        // Si hay un nombre de archivo, buscar solo ese archivo
        response = await axios.get(`http://localhost:3000/v1/files/data?fileName=${fileName}`)
      } else {
        // Si no hay filtro, buscar todos los archivos
        response = await axios.get('http://localhost:3000/v1/files/data')
      }

      const data = Array.isArray(response.data) ? response.data : [response.data] // Convertir objeto a array si es necesario
      const transformedData = transformData(data)
      dispatch(setFiles(transformedData))
    } catch (error) {
      console.error('Error fetching files:', error)
    } finally {
      setLoading(false) // Quitar el loader siempre, ya sea que la carga fue exitosa o no
    }
  }
  
  useEffect(() => {
    fetchFiles() // Cargar todos los archivos al montar el componente
  }, [dispatch])

  // Función para transformar los datos de los archivos
  const transformData = (data) => {
    const transformed = []
    data.forEach((file) => {
      file.lines.forEach((line) => {
        transformed.push({
          fileName: file.file,
          text: line.text,
          number: line.number,
          hex: line.hex
        })
      })
    })
    return transformed
  }

  // Filtrar por nombre de archivo
  const handleFilter = (fileName) => fetchFiles(fileName)

  return (
    <Container>
      <Navbar bg='danger' variant='dark' className='mb-3'>
        <Navbar.Brand href='#'>
          <img
            alt='Logo'
            src={logo}
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          React Test App
        </Navbar.Brand>
      </Navbar>

      <FileFilter onFilter={handleFilter} />

      {/* Mostrar el loader mientras se cargan los archivos */}
      {loading
        ? (
          <div className='text-center'>
            <Spinner animation='border' role='status'>
              <span className='visually-hidden'>Cargando...</span>
            </Spinner>
          </div>
          )
        : (
          <FileTable data={files} />
          )}
    </Container>
  )
}

export default App
