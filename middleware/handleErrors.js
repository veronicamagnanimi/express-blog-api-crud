const handleError = (err, req, res, next) => {
    res.statusCode = 500;
    res.json({
        message: "Errore interno del server"
    });
}

module.exports = handleError;