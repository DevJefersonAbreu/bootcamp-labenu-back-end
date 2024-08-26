// Endpoint para deletar um pedido existente
app.delete('/purchases/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Verificar se o pedido existe
    const existingPurchase = await db('purchases').where({ id }).first();
    if (!existingPurchase) {
      return res.status(404).json({ message: 'Pedido não encontrado.' });
    }

    // Deletar o pedido
    await db('purchases').where({ id }).del();

    // Deletar produtos associados ao pedido
    await db('purchases_products').where({ purchase_id: id }).del();

    res.status(200).json({ message: 'Pedido cancelado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cancelar o pedido.' });
  }
});
