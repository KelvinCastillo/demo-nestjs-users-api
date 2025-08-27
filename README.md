# Demo NestJS - Users API

Este proyecto es un **backend de ejemplo** desarrollado en [NestJS](https://nestjs.com/) con conexión a **PostgreSQL** utilizando **TypeORM**.  
Implementa una **arquitectura por capas**, separando responsabilidades de forma clara:

- **Controller:** maneja las peticiones HTTP.
- **Service:** contiene la lógica de negocio y mapeo Entity ⇄ DTO.
- **Entity/Modelo:** define las tablas de la base de datos.
- **DTOs:** validan y tipan la entrada/salida.
- **Repository:** acceso a datos (via TypeORM).

---

## 🚀 Características
- API REST para gestión de usuarios (`/api/users`).
- CRUD completo:
  - Crear usuario
  - Listar todos
  - Consultar por ID
  - Actualizar
  - Eliminar
- PostgreSQL con Docker y scripts de inicialización automáticos.
- Validación con `class-validator` y `class-transformer`.
- Pipes globales configurados para sanitización de datos.
- Preparado para pruebas unitarias inyectando `IUserService`.

---

## 🛠️ Tecnologías
- **NestJS** 10+
- **TypeORM** 0.3+
- **PostgreSQL** 16 (Docker)
- **Docker Compose**
- **Node.js** 18/20+

---

## 📦 Instalación y uso

### 1. Clonar repositorio
```bash
git clone https://github.com/<tu-usuario>/demo-nestjs-users-api.git
cd demo-nestjs-users-api
