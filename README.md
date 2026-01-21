# 🧪 Rick and Morty - Portal Dimensional

![Rick and Morty Banner](https://media.ambito.com/p/bc018f500b0552bafb2bb886d6aceb56/adjuntos/239/imagenes/038/786/0038786593/1200x675/smart/rick-and-mortyjpg.jpg)

<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

</div>

## 📄 Descripción

**Rick and Morty Portal** es una aplicación Full Stack (PERN) diseñada como una base de datos interdimensional. No solo consume la API oficial de Rick and Morty para listar, filtrar y ordenar personajes, sino que implementa un **CRUD completo** permitiendo al usuario crear sus propios personajes mutantes, guardarlos en una base de datos PostgreSQL, editarlos y eliminarlos.

El proyecto destaca por una interfaz moderna estilo **Glassmorphism** con efectos de neón, animaciones fluidas y una experiencia de usuario (UX) cuidada con feedback visual en tiempo real.

## 🚀 Características Principales

### 🌌 Exploración del Multiverso
- **Consumo de API Externa:** Conexión eficiente con la API de Rick and Morty.
- **Búsqueda y Filtrado:** Búsqueda por nombre combinada con filtros de backend (Género, Status, Origen).
- **Paginación:** Navegación fluida entre cientos de personajes.
- **Separación Lógica:** Visualización diferenciada entre personajes "Canon" (API) y "Mis Creaciones" (Base de Datos).

### 🧬 Laboratorio de Creación (CRUD)
- **Crear Personajes:** Formulario con validaciones para crear nuevas entidades.
- **Drag & Drop de Imágenes:** Integración con **Cloudinary** para subir imágenes arrastrando y soltando archivos desde el PC.
- **Edición en Tiempo Real:** Modal interactivo para modificar datos e imágenes de los personajes creados.
- **Eliminación Segura:** Borrado lógico de personajes de la base de datos.

### 🎨 UI/UX Avanzada
- **Diseño Glassmorphism:** Estética translúcida, moderna y responsiva.
- **Feedback Visual:** Modals personalizados (temática Rick & Morty) para notificar éxitos, errores o problemas de conexión.
- **Favoritos:** Sistema local para guardar y gestionar personajes preferidos.
- **Skeleton Loading:** Pantallas de carga para mejorar la experiencia de espera.

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React.js**: Construcción de interfaces dinámicas.
- **Redux**: Gestión global del estado (personajes, favoritos, filtros).
- **Styled-Components**: Estilizado CSS-in-JS modular y dinámico.
- **React Router DOM v6**: Manejo de rutas y navegación SPA.
- **Lucide React**: Iconografía moderna y ligera.
- **Axios**: Peticiones HTTP.

### Backend
- **Node.js & Express**: Servidor RESTful escalable.
- **Sequelize ORM**: Modelado y consultas a la base de datos.
- **Cloudinary API**: Gestión y almacenamiento de imágenes en la nube.

### Base de Datos
- **PostgreSQL**: Base de datos relacional robusta.

## 🔧 Instalación y Configuración Local

Si deseas correr este proyecto localmente:

1. ***Clonar el repositorio***
  ```bash
    git clone [https://github.com/Jonatan-Rodriguez/rick-and-morty-app.git](https://github.com/Jonatan-Rodriguez/rick-and-morty-app.git)
  ```


2. **Configurar Variables de Entorno (.env)**

  Crea un archivo .env en la carpeta server y client con tus credenciales:

    Server
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_HOST=localhost
    CLOUDINARY_CLOUD_NAME=tu_cloud_name
    CLOUDINARY_API_KEY=tu_api_key
    CLOUDINARY_API_SECRET=tu_api_secret


3. **Instalar Dependencias**

    En carpeta client
   ```bash
      npm install
   ```
    En carpeta server
   ```bash
      npm install
   ```
5. **Ejecutar**

    Cliente
   ```bash
      npm start
   ```
    Servidor
   ```bash
      npm start
   ```

## 🤝 Contribuciones

  ¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar la aplicación (como agregar dimensiones o episodios), por favor abre un issue o crea un pull request.

## 📄 Licencia

  Este proyecto está bajo la licencia MIT.

## ✉️ Contacto

 **Desarrollado con ❤️ y mucho café.**

    Autor: Jonatan Rodriguez

    LinkedIn: Jonatan J. Rodriguez

    Email: jonatarodriguez1998@gmail.com

---

“Wubba Lubba Dub Dub!”
