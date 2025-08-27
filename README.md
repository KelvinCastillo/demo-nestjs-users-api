<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.
</p>

<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank">
  <img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" />
</a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank">
  <img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" />
</a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank">
  <img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" />
</a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank">
  <img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" />
</a>
<a href="https://discord.gg/G7Qnnhy" target="_blank">
  <img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/>
</a>
<a href="https://opencollective.com/nest#backer" target="_blank">
  <img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" />
</a>
<a href="https://opencollective.com/nest#sponsor" target="_blank">
  <img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" />
</a>
</p>

---

# Demo NestJS – Users API

Este proyecto es un **backend de ejemplo** con [NestJS](https://nestjs.com/) y [PostgreSQL](https://www.postgresql.org/) usando **TypeORM**.  
Implementa arquitectura por capas (**Controller → Service → Entity + DTOs**) y un esquema Docker para levantar fácilmente la base de datos.

---

## 🚀 Características
- CRUD completo de usuarios (`/api/users`).
- Separación de responsabilidades con Controller / Service / DTOs.
- PostgreSQL en contenedor Docker con inicialización automática.
- Validación y transformación de datos (`class-validator`, `class-transformer`).
- Pipes globales para sanitizar peticiones.
- Listo para pruebas unitarias e integración.

---

## 📦 Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar base de datos en Docker
docker compose up -d --build

# 3. Ejecutar el proyecto
npm run start:dev

## 🧰 Comandos completos de como se genero el proyecto

### 0) Prerrequisitos
Se recomienda usar la **última versión LTS de Node.js**.

```bash
# Instalar/usar LTS con nvm
nvm install --lts
nvm use --lts

# Verificar versiones
node -v
npm -v

1) Verificar Nest CLI (instalar si no existe)

# Ver versión (fallará si no está instalado)
nest --version || true

# Instalar globalmente
npm i -g @nestjs/cli

# Verificar
nest --version


2) Crear proyecto NestJS

nest new demo-nestjs
cd demo-nestjs

3) Instalar dependencias principales

# ORM + PostgreSQL
npm i @nestjs/typeorm typeorm pg

# Config y validación
npm i @nestjs/config class-validator class-transformer @nestjs/mapped-types

# (Opcional) Swagger para documentación
npm i @nestjs/swagger swagger-ui-express

4) Generar scaffolding (módulo Users)

# Genera módulo + controller + service (vacíos)
nest g module users
nest g controller users
nest g service users

# (Opcional) Generar un recurso base con CRUD (Nest prompts)
# nest g resource users

5) Variables de entorno (crear .env)
6) Docker: levantar PostgreSQL

Estructura sugerida:

/initdb/010_schema.sql   # script de creación de tablas
Dockerfile
docker-compose.yml

Levantar DB

docker compose up -d --build


7) Configurar TypeORM en app.module.ts

8) Ejecutar la app

# desarrollo
npm run start:dev

# producción
npm run start:prod


API disponible en: http://localhost:3000/api/users

🔑 Endpoints principales

GET /api/users → Lista todos

GET /api/users/:id → Obtiene por ID (UUID)

POST /api/users → Crea usuario

PATCH /api/users/:id → Actualiza usuario

DELETE /api/users/:id → Elimina usuario

Colección Postman sugerida en: postman/users.postman_collection.json.





