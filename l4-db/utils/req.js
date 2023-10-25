function getIdFromRequest(req) {
    return req.params.id
}

function getBodyFromRequest(req) {
    return req.body
}

module.exports = {
    getIdFromRequest,
    getBodyFromRequest
}