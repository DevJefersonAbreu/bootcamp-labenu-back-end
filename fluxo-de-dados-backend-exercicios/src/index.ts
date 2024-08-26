// Endpoint para deletar um usuário por id
app.delete('/users/:id', (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const userIndex = users.findIndex(user => user.id === id);
  
      if (userIndex === -1) {
        return res.status(404).send('Usuário não encontrado');
      }
  
      users.splice(userIndex, 1);
      res.status(200).send('Usuário apagado com sucesso');
    } catch (error) {
      res.status(500).send('Erro ao deletar usuário');
    }
  });
 // Endpoint para deletar um produto por id
app.delete('/products/:id', (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const productIndex = products.findIndex(product => product.id === id);
  
      if (productIndex === -1) {
        return res.status(404).send('Produto não encontrado');
      }
  
      products.splice(productIndex, 1);
      res.status(200).send('Produto apagado com sucesso');
    } catch (error) {
      res.status(500).send('Erro ao deletar produto');
    }
  });
  // Endpoint para editar um produto por id
app.put('/products/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, price, description, imageUrl } = req.body;
  
    try {
      const productIndex = products.findIndex(product => product.id === id);
  
      if (productIndex === -1) {
        return res.status(404).send('Produto não encontrado');
      }
  
      const product = products[productIndex];
  
      if (name !== undefined) {
        if (typeof name !== 'string' || name.trim().length === 0) {
          return res.status(400).send('Nome inválido');
        }
        product.name = name;
      }
  
      if (price !== undefined) {
        if (typeof price !== 'number' || price <= 0) {
          return res.status(400).send('Preço inválido');
        }
        product.price = price;
      }
  
      if (description !== undefined) {
        if (typeof description !== 'string' || description.trim().length === 0) {
          return res.status(400).send('Descrição inválida');
        }
        product.description = description;
      }
  
      if (imageUrl !== undefined) {
        if (typeof imageUrl !== 'string' || imageUrl.trim().length === 0) {
          return res.status(400).send('URL da imagem inválida');
        }
        product.imageUrl = imageUrl;
      }
  
      products[productIndex] = product;
      res.status(200).send('Produto atualizado com sucesso');
    } catch (error) {
      res.status(500).send('Erro ao atualizar produto');
    }
  });
  