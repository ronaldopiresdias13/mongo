exports.test = function (req, res) {
    res.send("Hello World! Teste ao COntroller...");
};

// Adicionar os detalhes do BD
exports.add = function(req, res) {
    res.send({type: 'POST'});
}

// Atualizar os detalhes do BD
// exports.update = function(req, res) {
//     res.send({type: 'PUT'});
// }

// Deletar os detalhes do BD
// exports.delete = function(req, res) {
//     res.send({type: 'DELETE'});
// }

// exports.create = function (req, res){
//     console.log("POST request: ", req.body);
//     res.send({
//         type: 'POST',
//         name: req.body.name,
//         rank: req.body.rank
//     });
// }

const PI = require('../models/PImodel');

exports.create = function (req, res, next){
    PI.create(req.body).then(function(pi){
        res.send(pi);
    }).catch(next);
}

exports.delete = function (req, res, next){
    PI.findByIdAndRemove({_id: req.params.id}).then(function(pi){
        res.send(pi);
    }).catch(next);
}

exports.update = function (req, res, next) {
    PI.findByIdAndUpdate({_id: req.params.id}, req.body ).then(function () {
        PI.findOne({_id: req.params.id}).then(function(pi){
            res.send(pi);
        })
    }).catch(next);  
};

// listar os detalhes do BD
exports.details = function(req, res) {
    PI.find({}).then(function(pi){
        res.send(pi);
    })
 }