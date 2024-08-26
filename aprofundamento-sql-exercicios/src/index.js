app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, price, description, imageUrl } = req.body;

  // Atualizar produto
  const updates = [];
  const params = [];
  
  if (name) {
      updates.push('name = ?');
      params.push(name);
  }
  if (price) {
      updates.push('price = ?');
      params.push(price);
  }
  if (description) {
      updates.push('description = ?');
      params.push(description);
  }
  if (imageUrl) {
      updates.push('image_url = ?');
      params.push(imageUrl);
  }

  if (updates.length === 0) {
      return res.status(400).send('Nenhum campo para atualizar.');
  }

  params.push(id);
  const query = `UPDATE products SET ${updates.join(', ')} WHERE id = ?`;

  db.run(query, params, function(err) {
      if (err) {
          return res.status(500).send('Erro ao atualizar produto.');
      }
      if (this.changes === 0) {
          return res.status(404).send('Produto não encontrado.');
      }
      res.status(200).send('Produto atualizado com sucesso');
  });
});
