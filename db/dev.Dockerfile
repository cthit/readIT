FROM postgres:latest
ENV POSTGRES_USER=docker
ENV POSTGRES_PASSWORD=docker
ENV POSTGRES_DB=readit_db
COPY ./init_db.sql /docker-entrypoint-initdb.d/
