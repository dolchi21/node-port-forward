var net = require('net')
var parseAddress = require('./parseAddress')

function forward(addrFrom, addrTo) {

    var addrFrom = parseAddress(addrFrom)
    var addrTo = parseAddress(addrTo)

    var server = net.createServer(function (from) {
        
        var to = net.createConnection(addrTo)

        from.pipe(to)
        to.pipe(from)

    }).listen(addrFrom.host, addrFrom.port)

    return server

}

module.exports = forward
