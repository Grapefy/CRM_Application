CREATE TABLE clientes (
    id_cliente SERIAL PRIMARY KEY,
    nome VARCHAR,
    email VARCHAR,
    fone VARCHAR,
    is_empresa BOOLEAN,
    identificador VARCHAR,
    dt_nascimento DATE,
    created TIMESTAMP,
    modified TIMESTAMP
);