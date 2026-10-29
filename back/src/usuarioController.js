const db = require('./usuariosDatabase');

const listarUsuarios = async (req, res) => {
  try {
    // Executa a query SQL no banco de dados
    const resultado = await db.query('SELECT * FROM usuarios ORDER BY id ASC');

    // Retorna os dados em formato JSON para o cliente
    return res.status(200).json(resultado.rows);
  } catch (erro) {
    console.error('Erro ao buscar usuários:', erro);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const criarUsuario = async (req, res) => {
  const { nome, email } = req.body; // Pega os dados enviados pelo formulário

  // Insere no banco e o "RETURNING *" serve para o Postgres nos devolver o ID gerado
  const querySQL = 'INSERT INTO usuarios (nome, email) VALUES ($1, $2) RETURNING *';
  const resultado = await db.query(querySQL, [nome, email]);

  // Retorna o status 211 (Criado) com o novo usuário do banco
  res.status(201).json(resultado.rows[0]);
};

const atualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body; // Pega os novos dados do formulário

  try {
    // Faz o UPDATE no banco. O $1, $2 e $3 correspondem ao array final
    const querySQL = 'UPDATE usuarios SET nome = $1, email = $2 WHERE id = $3 RETURNING *';
    const resultado = await db.query(querySQL, [nome, email, id]);

    // Se não encontrou o usuário para atualizar
    if (resultado.rows.length === 0) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    // Retorna o usuário já atualizado
    res.json({ mensagem: "Usuário atualizado com sucesso!", usuario: resultado.rows[0] });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
};

module.exports = {
  listarUsuarios, criarUsuario, atualizarUsuario
};
