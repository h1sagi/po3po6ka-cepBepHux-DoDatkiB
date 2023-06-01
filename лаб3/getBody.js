const fs = require("fs");
module.exports = (request, response, next) => {
    let data = []

    request.on("data", dataChunk => {
        data.push(dataChunk)
    })

    request.on("end", () => {
        request.body = Buffer.concat(data).toString()
        if (request.headers["content-type"] === "application/json"){
        
            request.body = JSON.parse(request.body)
        }
        next(request, response)
    })
}
