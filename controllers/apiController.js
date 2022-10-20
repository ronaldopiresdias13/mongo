exports.test = function (req, res) {
    res.send("Hello World! Teste ao COntroller...");
};

// listar os detalhes do BD
exports.details = function(req, res) {
    res.send({type: 'GET'});
}

// Adicionar os detalhes do BD
exports.add = function(req, res) {
    res.send({type: 'POST'});
}

// Atualizar os detalhes do BD
exports.update = function(req, res) {
    res.send({type: 'PUT'});
}

// Deletar os detalhes do BD
exports.delete = function(req, res) {
    res.send({type: 'DELETE'});
}
