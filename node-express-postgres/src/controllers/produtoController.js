const pool = require('../config/db');

const listarProdutos = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM produtos ORDER BY id ASC'
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const buscarProdutoPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'SELECT * FROM produtos WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const criarProduto = async (req, res) => {
  const { nome, preco, quantidade } = req.body;

  if (!nome || preco === undefined || quantidade === undefined) {
    return res.status(400).json({
      error: 'Os campos nome, preco e quantidade são obrigatórios',
    });
  }

  try {
    const result = await pool.query(
      `INSERT INTO produtos (nome, preco, quantidade)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [nome, preco, quantidade]
    );

    res.status(201).json({
      message: 'Produto criado com sucesso',
      produto: result.rows[0],
    });
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const atualizarProduto = async (req, res) => {
  const { id } = req.params;
  const { nome, preco, quantidade } = req.body;

  if (!nome || preco === undefined || quantidade === undefined) {
    return res.status(400).json({
      error: 'Os campos nome, preco e quantidade são obrigatórios',
    });
  }

  try {
    const result = await pool.query(
      `UPDATE produtos
       SET nome = $1, preco = $2, quantidade = $3
       WHERE id = $4
       RETURNING *`,
      [nome, preco, quantidade, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.status(200).json({
      message: 'Produto atualizado com sucesso',
      produto: result.rows[0],
    });
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const deletarProduto = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM produtos WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.status(200).json({
      message: 'Produto deletado com sucesso',
      produto: result.rows[0],
    });
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = {
  listarProdutos,
  buscarProdutoPorId,
  criarProduto,
  atualizarProduto,
  deletarProduto,
};