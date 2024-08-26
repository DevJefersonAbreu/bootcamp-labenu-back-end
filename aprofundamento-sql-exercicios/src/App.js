import express from 'express';
import bodyParser from 'body-parser';
import sqlite3 from 'sqlite3';

const app = express();
const port = 3000;

const db = new sqlite3.Database('./src/database/labecommerce.db');

app.use(bodyParser.json());

app.post('/products', (req, res) => {
    const { id, name, price, description, imageUrl } = req.body;

    // Verificar se todos os campos necessários estão presentes
    if (!id || !name || !price || !description || !imageUrl) {
        return res.status(400).send('Todos os campos são obrigatórios.');
    }

    // Verificar se o ID já existe
    db.get('SELECT id FROM products WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).send('Erro ao verificar ID.');
        }
        if (row) {
            return res.status(400).send('ID já existe.');
        }

        // Inserir novo produto
        db.run('INSERT INTO products (id, name, price, description, image_url) VALUES (?, ?, ?, ?, ?)', [id, name, price, description, imageUrl], function(err) {
            if (err) {
                return res.status(500).send('Erro ao criar produto.');
            }
            res.status(201).send('Produto cadastrado com sucesso');
        });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
