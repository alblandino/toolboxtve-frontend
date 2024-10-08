import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const FileFilter = ({ onFilter }) => {
  const [fileName, setFileName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onFilter(fileName)
  }

  return (
    <Form onSubmit={handleSubmit} className='mb-3'>
      <Form.Group controlId='formFileName'>
        <Form.Label>Filtrar por nombre de archivo</Form.Label>
        <Form.Control
          type='text'
          placeholder='Nombre del archivo'
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
      </Form.Group>
      <br />
      <Button variant='primary' type='submit'>
        Filtrar archivo
      </Button>
    </Form>
  )
}

export default FileFilter
