module.exports.getAll = function (request, response){
    response.status(200).json({
        getAll: true
    })
}

module.exports.create = function (request, response){
    response.status(200).json({
        register: true
    })
}