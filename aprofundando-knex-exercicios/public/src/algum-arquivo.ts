// src/algum-arquivo.ts

import { TUser, TProduct } from './types';

const user: TUser = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'password123',
  createdAt: '2024-08-26T12:00:00.000Z'
};

const product: TProduct = {
  id: '1',
  name: 'Produto Exemplo',
  price: 99.99,
  description: 'Descrição do produto exemplo',
  imageUrl: 'https://example.com/imagem.jpg'
};
