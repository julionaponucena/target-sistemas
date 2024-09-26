SELECT clientes.id_cliente, clientes.razao_social, telefones.numero AS telefone FROM clientes 
JOIN estados ON estados.id_estado = clientes.id_estado 
JOIN telefones ON telefones.id_cliente = clientes.id_cliente
WHERE estados.descricao='SP'