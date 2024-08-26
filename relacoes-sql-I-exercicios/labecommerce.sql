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

-- Criação da tabela purchases
CREATE TABLE IF NOT EXISTS purchases (
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    buyer TEXT NOT NULL,
    total_price REAL NOT NULL,
    created_at TEXT NOT NULL,
    FOREIGN KEY (buyer) REFERENCES users(id)
);

-- Inserir pedidos na tabela purchases
INSERT INTO purchases (id, buyer, total_price, created_at) VALUES
('p001', 'u001', 150.75, '2024-08-26T15:30:00Z'),
('p002', 'u002', 89.99, '2024-08-26T16:45:00Z');

-- Atualizar o preço total do pedido
UPDATE purchases
SET total_price = 175.00
WHERE id = 'p001';


-- Adiciona pedidos à tabela purchases
INSERT INTO purchases (id, buyer, total_price, created_at) VALUES
('p001', 'u001', 150.75, '2024-08-25T14:32:00.000Z'),
('p002', 'u002', 299.99, '2024-08-26T09:21:00.000Z');

-- Atualiza o preço total de um pedido para praticar a edição
UPDATE purchases SET total_price = 179.99 WHERE id = 'p001';


-- Consulta com JOIN para obter detalhes de uma compra específica
SELECT
    p.id AS purchase_id,
    p.buyer AS user_id,
    u.name AS user_name,
    u.email AS user_email,
    p.total_price,
    p.created_at AS purchase_date
FROM
    purchases p
JOIN
    users u
ON
    p.buyer = u.id
WHERE
    p.id = 'p001';  -- Substitua 'p001' pelo ID da compra desejada
