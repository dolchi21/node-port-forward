module.exports = function parseAddress(str) {
    if (typeof str === typeof {}) {
        return {
            host: str.host || requireHost(),
            port: +str.port || requirePort()
        }
    }
    var addrRegex = /^(([a-zA-Z\-\.0-9]+):)?(\d+)$/

    var addr = {
        host: addrRegex.exec(str)[2],
        port: +addrRegex.exec(str)[3]
    }

    return addr
}

function requireHost(){
    throw new Error('HostRequiredError')
}
function requirePort(){
    throw new Error('PortRequiredError')
}