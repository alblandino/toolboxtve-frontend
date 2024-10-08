# 📺 ToolboxTV Challenge - Frontend App

Este proyecto es el frontend para la prueba de Toolbox TV. Se ha desarrollado utilizando **React**, **Redux**, **React Bootstrap**, y **Jest** para los tests. El propósito de este frontend es consumir un API que muestra una lista de archivos y permite filtrarlos por su nombre.

## 🚀 Requisitos

- **Node.js** (versión 16 o superior)
- **npm** (versión 6 o superior)

## 🛠️ Tecnologías utilizadas

- **React** (v17+): Librería principal para la creación de interfaces de usuario.
- **Redux** (v4+): Para la gestión del estado de la aplicación.
- **React Bootstrap** (v2+): Framework CSS para mejorar la apariencia de la interfaz.
- **Jest** (v27+): Framework de pruebas para JavaScript.
- **Axios** (v1+): Para realizar solicitudes HTTP a la API.

## 🚀 Instalación y ejecución

Sigue los siguientes pasos para levantar el proyecto en tu entorno local:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/alblandino/toolboxtve-frontend.git
   ```

2. Navegar al directorio del proyecto:
   ```bash
   cd toolboxtve-frontend
   ```

3. Instalar las dependencias:
   ```bash
   npm install
   ```

4. Iniciar el proyecto en modo de desarrollo:
   ```bash
   npm start
   ```

   Esto abrirá automáticamente la aplicación en el navegador en `http://localhost:4000`.

## 🧪 Pruebas

El proyecto está configurado con **Jest** para las pruebas unitarias. A continuación, te explicamos cómo ejecutar las pruebas:

1. Para correr todas las pruebas:
   ```bash
   npm test
   ```

   Esto ejecutará los tests y te mostrará el resultado en la consola.

## 📋 Funcionalidades

- Visualizar un listado de archivos obtenidos desde la API.
- Filtrar archivos por nombre mediante el campo de búsqueda.
- Mostrar un **loader** mientras los datos se están obteniendo.

## 💻 Desarrollo

Algunas instrucciones clave para el desarrollo:

- Para modificar el estilo visual, se está utilizando **React Bootstrap**.
- Los datos de los archivos se obtienen de una API y se almacenan utilizando **Redux**.
- Las pruebas se manejan con **Jest**.