const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/database/labecommerce.db');

// Criação da tabela purchases_products
const createTableSQL = `
    CREATE TABLE IF NOT EXISTS purchases_products (
        purchase_id TEXT NOT NULL,
        product_id TEXT NOT NULL,
        quantity INTEGER NOT NULL,
        FOREIGN KEY (purchase_id) REFERENCES purchases(id),
        FOREIGN KEY (product_id) REFERENCES products(id)
    );
`;

// Inserir dados na tabela purchases_products
const insertDataSQL = `
    INSERT INTO purchases_products (purchase_id, product_id, quantity) VALUES
    ('p001', 'prod001', 5),
    ('p001', 'prod002', 3);
`;

// Executar as queries
db.serialize(() => {
    db.run(createTableSQL, (err) => {
        if (err) {
            console.error('Erro ao criar a tabela:', err.message);
        } else {
            console.log('Tabela purchases_products criada com sucesso!');
        }
    });

    db.run(insertDataSQL, (err) => {
        if (err) {
            console.error('Erro ao inserir dados:', err.message);
        } else {
            console.log('Dados inseridos na tabela purchases_products com sucesso!');
        }
    });
});

db.close();
