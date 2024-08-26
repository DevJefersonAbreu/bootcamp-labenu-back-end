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

// Endpoint para deletar um usuário por ID
app.delete('/users/:id', (req: Request, res: Response) => {
  const { id } = req.params;

  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(200).send('User apagado com sucesso');
  } else {
    res.status(404).send('User não encontrado');
  }
});

// Endpoint para deletar um produto por ID
app.delete('/products/:id', (req: Request, res: Response) => {
  const { id } = req.params;

  const productIndex = products.findIndex(product => product.id === id);

  if (productIndex !== -1) {
    products.splice(productIndex, 1); // Remove o produto do array
    res.status(200).send('Produto apagado com sucesso');
  } else {
    res.status(404).send('Produto não encontrado');
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// Endpoint para deletar um produto por ID
app.delete('/products/:id', (req: Request, res: Response) => {
    const { id } = req.params;
  
    // Filtra o array para remover o produto com o ID fornecido
    const productIndex = products.findIndex(product => product.id === id);
  
    if (productIndex !== -1) {
      products.splice(productIndex, 1); // Remove o produto do array
      res.status(200).send('Produto apagado com sucesso');
    } else {
      res.status(404).send('Produto não encontrado');
    }
  });
  

  // Endpoint para editar um produto por ID
app.put('/products/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, price, description, imageUrl } = req.body;
  
    // Encontra o produto com o ID fornecido
    const productIndex = products.findIndex(product => product.id === id);
  
    if (productIndex !== -1) {
      // Atualiza as propriedades do produto, se fornecidas
      const product = products[productIndex];
      if (name !== undefined) product.name = name;
      if (price !== undefined) product.price = price;
      if (description !== undefined) product.description = description;
      if (imageUrl !== undefined) product.imageUrl = imageUrl;
  
      res.status(200).send('Produto atualizado com sucesso');
    } else {
      res.status(404).send('Produto não encontrado');
    }
  });
  