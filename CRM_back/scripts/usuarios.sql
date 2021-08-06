CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    email VARCHAR,
    senha VARCHAR,
    permissao INTEGER,
    created TIMESTAMP,
    modified TIMESTAMP
);