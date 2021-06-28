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
    created TIMESTAMP,
    modified TIMESTAMP
);


ALTER TABLE "enderecos" ADD FOREIGN KEY ("cliente_id") REFERENCES "clientes" ("id_cliente");