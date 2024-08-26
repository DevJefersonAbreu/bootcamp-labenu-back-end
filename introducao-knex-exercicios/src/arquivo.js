import express, { Request, Response } from 'express';
import { products } from './database';
import { Product } from './types';

const app = express();
app.use(express.json());

app.post('/products', (req: Request, res: Response) => {
    try {
        const { id, name, price, description, imageUrl } = req.body as Product;

        if (!id || !name || !price || !description || !imageUrl) {
            return res.status(400).send('Todos os campos são obrigatórios');
        }

        if (products.some(product => product.id === id)) {
            return res.status(400).send('Já existe um produto com esse ID');
        }

        products.push({ id, name, price, description, imageUrl });
        res.status(201).send('Produto cadastrado com sucesso');
    } catch (error) {
        res.status(500).send('Erro ao criar produto');
    }
});

// ... restante do código
