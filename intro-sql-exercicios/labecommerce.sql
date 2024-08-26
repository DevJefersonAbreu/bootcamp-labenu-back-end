-- Criação da tabela users
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    createdAt TEXT NOT NULL
);

-- Criação da tabela products
CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT NOT NULL,
    imageUrl TEXT NOT NULL
);


-- Criação da tabela users
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at TEXT NOT NULL
);

-- Inserção de dados na tabela users
INSERT INTO users (id, name, email, password, created_at) VALUES
('u001', 'Fulano', 'fulano@email.com', 'fulano123', '2024-08-26T10:00:00Z'),
('u002', 'Beltrana', 'beltrana@email.com', 'beltrana00', '2024-08-26T11:00:00Z'),
('u003', 'Ciclano', 'ciclano@email.com', 'ciclano99', '2024-08-26T12:00:00Z');

-- Criação da tabela products
CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL
);
