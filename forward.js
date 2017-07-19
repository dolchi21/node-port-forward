var net = require('net')

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

function parseAddress(str) {
    if (typeof str === typeof {}) {
        return {
            host: str.host,
            port: +str.port
        }
    }
    var addrRegex = /^(([a-zA-Z\-\.0-9]+):)?(\d+)$/

    var addr = {
        host: addrRegex.exec(str)[2],
        port: +addrRegex.exec(str)[3]
    }

    return addr
}