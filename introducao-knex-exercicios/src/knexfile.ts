// Importar express e knex
import express from 'express';
import knex from 'knex';

// Configuração do express e knex
const app = express();
const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './src/database/labecommerce.db'
  },
  useNullAsDefault: true
});

app.use(express.json());

// Endpoint para editar um produto existente
app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, description, imageUrl } = req.body;

  try {
    // Verificar se o produto existe
    const existingProduct = await db('products').where({ id }).first();
    if (!existingProduct) {
      return res.status(404).json({ message: 'Produto não encontrado.' });
    }

    // Atualizar o produto
    await db('products')
      .where({ id })
      .update({
        name,
        price,
        description,
        image_url: imageUrl
      });

    res.status(200).json({ message: 'Produto atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar o produto.' });
  }
});
