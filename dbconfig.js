const config = {
    user: "sa",
    password: "H1llr0m2020",
    server: "129.159.85.10",
    //server: "172.16.0.220",
    database: "DBQS",
    options: {
        trustedconnection: false,
        enableArithAbort: true,
        encrypt: false
        //instancename: '<nombreinstancia>' En caso de que se tenga alguna instancia
    }

}

module.exports = config;