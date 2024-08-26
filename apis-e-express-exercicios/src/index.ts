import express, { Request, Response } from 'express';
import { users, products } from './database';
import { User, Product } from './types';

const app = express();
const port = 3000;

// Middleware para parsear o corpo das requisições em formato JSON
app.use(express.json());

// Endpoint para verificar se o servidor está funcionando
app.get('/ping', (req: Request, res: Response) => {
  res.send('Pong!');
});

// Endpoint para obter todos os usuários
app.get('/users', (req: Request, res: Response) => {
  res.status(200).json(users);
});

// Endpoint para obter todos os produtos
app.get('/products', (req: Request, res: Response) => {
  res.status(200).json(products);
});

// Endpoint para obter produtos filtrados por nome
app.get('/product', (req: Request, res: Response) => {
  const name = req.query.name as string | undefined;

  if (name) {
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
    res.status(200).json(filteredProducts);
  } else {
    res.status(200).json(products);
  }
});

// Endpoint para criar um novo usuário
app.post('/users', (req: Request, res: Response) => {
  const { id, name, email, password } = req.body;

  // Cria um novo usuário e adiciona ao array
  const newUser: User = {
    id,
    name,
    email,
    password,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  res.status(201).send('Cadastro realizado com sucesso');
});

// Endpoint para criar um novo produto
app.post('/products', (req: Request, res: Response) => {
  const { id, name, price, description, imageUrl } = req.body;

  // Cria um novo produto e adiciona ao array
  const newProduct: Product = {
    id,
    name,
    price,
    description,
    imageUrl,
  };

  products.push(newProduct);
  res.status(201).send('Produto cadastrado com sucesso');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
