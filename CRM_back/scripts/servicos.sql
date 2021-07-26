CREATE TABLE servicos (
    id_servico SERIAL PRIMARY KEY,
    nome VARCHAR,
    descricao VARCHAR,
    valor DOUBLE PRECISION,
    setor_id INTEGER,
    created TIMESTAMP,
    modified TIMESTAMP
);

ALTER TABLE servicos ADD FOREIGN KEY (setor_id) REFERENCES setors(id_setor);