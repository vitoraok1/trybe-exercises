const connection = require('./connection');

const insert = (task) => connection.execute(
  'INSERT INTO tasks (nome, descricao) VALUES (?, ?)',
  [task.nome, task.descricao],
);

const findAll = () => connection.execute('SELECT * FROM tasks');

const findById = (id) => connection.execute('SELECT * FROM tasks WHERE id = ?', [id]);

const update = (task, id) => connection.execute(
  'UPDATE tasks SET nome = ?, descricao = ? WHERE id = ?', [task.nome, task.descricao, id],
);

const remove = (id) => connection.execute(
  'DELETE FROM tasks WHERE id = ?', [id],
);

module.exports = {
  insert,
  findAll,
  findById,
  update,
  remove,
};