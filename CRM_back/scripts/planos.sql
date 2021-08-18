CREATE TABLE planos (
    id_plano SERIAL PRIMARY KEY,
    nome VARCHAR,
    recorrencia VARCHAR,
    valor DOUBLE PRECISION,
    detalhes TEXT,
    tipoplano_id INTEGER,
    created TIMESTAMP,
    modified TIMESTAMP
);

ALTER TABLE planos ADD FOREIGN KEY (tipoplano_id) REFERENCES tipoplanos(id_tipoplano);