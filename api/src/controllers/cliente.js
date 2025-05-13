const prisma = require('../connect');

const create = async (req, res) => {
    const { nome, email, senha } = req.body;
    console.log('Dados recebidos:', req.body);

    try {
        const cliente = await prisma.cliente.create({
            data: { nome, email, senha },
        });
        console.log('Usuário criado:', cliente);
        res.status(201).json(cliente);
    } catch (err) {
        console.error('Erro ao criar usuário:', err);
        res.status(400).json(err);
    }
};

module.exports = {create};