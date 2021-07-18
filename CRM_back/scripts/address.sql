CREATE TABLE enderecos (
    id_endereco SERIAL PRIMARY KEY,
    cep VARCHAR,
    logradouro VARCHAR,
    bairro VARCHAR,
    UF VARCHAR,
    numero NUMERIC,
    complemento VARCHAR,
    cliente_id INTEGER,
    administrador_id INTEGER,
    funcionario_id INTEGER,
    created TIMESTAMP,
    modified TIMESTAMP
);


ALTER TABLE "enderecos" ADD FOREIGN KEY ("cliente_id") REFERENCES "clientes" ("id_cliente");
ALTER TABLE "enderecos" ADD FOREIGN KEY ("administrador_id") REFERENCES "administradors" ("id_administrador");
ALTER TABLE "enderecos" ADD FOREIGN KEY ("funcionario_id") REFERENCES "funcionarios" ("id_funcionario");