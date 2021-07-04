CREATE TABLE funcionarios (
    id_funcionario SERIAL PRIMARY KEY,
    nome VARCHAR,
    dt_nascimento DATE,
    email VARCHAR,
    fone VARCHAR,
    salario_id INTEGER,
    created TIMESTAMP,
    modified TIMESTAMP
)

-- TEM CARGO?

ALTER TABLE "funcionarios" ADD FOREIGN KEY ("salario_id") REFERENCES "salarios" ("id_salario");