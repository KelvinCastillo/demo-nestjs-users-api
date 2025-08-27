# syntax=docker/dockerfile:1
FROM postgres:16-alpine

# Zona horaria (ajústala si quieres)
ENV TZ=America/Guatemala

# Copia cualquier script .sql o .sh a la carpeta de init.
# Postgres los ejecuta automáticamente SOLO la primera vez que se inicializa el volumen de datos.
COPY initdb/*.sql /docker-entrypoint-initdb.d/
COPY initdb/*.sh /docker-entrypoint-initdb.d/

# Healthcheck simple: verifica que la instancia esté lista
HEALTHCHECK --interval=10s --timeout=5s --retries=5 \
  CMD pg_isready -U "$POSTGRES_USER" || exit 1

EXPOSE 5432
