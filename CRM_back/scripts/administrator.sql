CREATE TABLE administradors (
    id_administrador SERIAL PRIMARY KEY,
    nome VARCHAR,
    email VARCHAR,
    fone VARCHAR,
    created TIMESTAMP,
    modified TIMESTAMP
);