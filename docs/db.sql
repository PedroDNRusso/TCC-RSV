DROP database DiscoHouse;
CREATE DATABASE DiscoHouse;
USE DiscoHouse;

CREATE TABLE clientes(
    id_cli INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(255) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL
);

CREATE TABLE disco(
    id_disco INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    artista VARCHAR(255) NOT NULL,
    ano_lancamento INTEGER NOT NULL,
    genero VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    quantidade INTEGER NOT NULL,
    id_forn INTEGER NOT NULL,
    FOREIGN KEY (id_forn) REFERENCES fornecedor(id_forn)
);

CREATE TABLE fornecedor(
    id_forn INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(255) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL
);

CREATE TABLE pedidos(
    id_pedido INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_cli INTEGER NOT NULL,
    id_disco INTEGER NOT NULL,
    data_pedido DATE NOT NULL,
    precos DECIMAL(10, 2) NOT NULL,
    quantidade INTEGER NOT NULL,
    subtotal DECIMAL(10, 2) NOT NULL,%3CmxGraphModel%3E%3Croot%3E%3CmxCell%20id%3D%220%22%2F%3E%3CmxCell%20id%3D%221%22%20parent%3D%220%22%2F%3E%3CmxCell%20id%3D%222%22%20value%3D%22data%22%20style%3D%22ellipse%3BwhiteSpace%3Dwrap%3Bhtml%3D1%3B%22%20vertex%3D%221%22%20parent%3D%221%22%3E%3CmxGeometry%20x%3D%22690%22%20y%3D%2250%22%20width%3D%2260%22%20height%3D%2240%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3C%2Froot%3E%3C%2FmxGraphModel%3E
    FOREIGN KEY (id_disco) REFERENCES disco(id_disco),
    FOREIGN KEY (id_cli) REFERENCES clientes(id_cli)
);
