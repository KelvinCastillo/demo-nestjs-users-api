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
