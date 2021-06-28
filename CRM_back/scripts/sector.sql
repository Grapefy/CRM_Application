CREATE TABLE setores (
    id_setor SERIAL PRIMARY KEY,
    nome VARCHAR,
    responsavel VARCHAR,
    descricao VARCHAR,
    created TIMESTAMP,
    modified TIMESTAMP
);