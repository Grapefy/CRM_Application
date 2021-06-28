CREATE TABLE cargos (
    id_cargo SERIAL PRIMARY KEY,
    nome VARCHAR,
    descricao VARCHAR,
    salario_bruto DOUBLE PRECISION,
    setor_id INTEGER,
    created TIMESTAMP,
    modified TIMESTAMP
)

ALTER TABLE "cargos" ADD FOREIGN KEY ("setor_id") REFERENCES "setors" ("id_setor");