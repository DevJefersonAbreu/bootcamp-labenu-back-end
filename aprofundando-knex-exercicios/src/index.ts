import express from 'express';
import knex from 'knex';

// Configuração do Knex (certifique-se de ajustar a configuração conforme necessário)
const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './src/database/labecommerce.db'
  },
  useNullAsDefault: true
});

const app = express();
app.use(express.json());

// Endpoint para obter informações de um pedido específico, incluindo produtos
app.get('/purchases/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Consulta para obter as informações do pedido e do comprador
    const [purchase] = await db('purchases')
      .select(
        'purchases.id as purchaseId',
        'purchases.buyer as buyerId',
        'users.name as buyerName',
        'users.email as buyerEmail',
        'purchases.total_price as totalPrice',
        'purchases.created_at as createdAt'
      )
      .join('users', 'purchases.buyer', '=', 'users.id')
      .where('purchases.id', id);

    // Verifica se o pedido foi encontrado
    if (!purchase) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }

    // Consulta para obter os produtos relacionados ao pedido
    const products = await db('purchases_products')
      .select(
        'products.id',
        'products.name',
        'products.price',
        'products.description',
        'products.image_url as imageUrl',
        'purchases_products.quantity'
      )
      .join('products', 'purchases_products.product_id', '=', 'products.id')
      .where('purchases_products.purchase_id', id);

    // Adiciona os produtos à resposta
    const response = {
      ...purchase,
      products
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar o pedido.' });
  }
});

// Configuração do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
