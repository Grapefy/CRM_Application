CREATE TABLE funcionarios (
    id_funcionario SERIAL PRIMARY KEY,
    nome VARCHAR,
    dt_nascimento DATE,
    email VARCHAR,
    fone VARCHAR,
    created TIMESTAMP,
    modified TIMESTAMP
)

-- TEM CARGO?

--salario_id INTEGER,
-- ALTER TABLE "funcionarios" ADD FOREIGN KEY ("salario_id") REFERENCES "salarios" ("id_salario");