const produtos = [
    { id: 1, nome: 'X-Burguer', preco: 18.50 },
    { id: 2, nome: 'Fritas', preco: 9.00 },
];

const listar = (req, res) => {
    res.json(produtos);
};

const buscarPorId = (req, res) => {
    const produto = produtos.find(p => p.id === Number(req.params.id));
    if (!produto) return res.status(404).json({ erro: 'Não encontrado' });
    res.json(produto);
};

const criar = (req, res) => {
    const { nome, preco } = req.body;
    if (!nome || !preco) return res.status(400).json({ erro: 'Campos obrigatórios' });
    const novo = { id: produtos.length + 1, nome, preco };
    produtos.push(novo);
    res.status(201).json(novo);
};

const atualizar = (req, res) => {
    const index = produtos.findIndex(p => p.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ erro: 'Não encontrado' });
    
    const { nome, preco } = req.body;
    if (!nome || !preco) return res.status(400).json({ erro: 'Campos obrigatórios' });
    
    produtos[index] = { id: produtos[index].id, nome, preco };
    res.json(produtos[index]);
};

const remover = (req, res) => {
    const index = produtos.findIndex(p => p.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ erro: 'Não encontrado' });
    
    produtos.splice(index, 1);
    res.status(204).send();
};

module.exports = { listar, buscarPorId, criar, atualizar, remover };