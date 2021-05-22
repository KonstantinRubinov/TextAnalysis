const slangsService = require("../services/slangs.service");
var HttpStatus = require('http-status-codes');

exports.GetAllWords = async function (req, res) {
    try {
        var slangs = await slangsService.GetAllWords();
        return res.status(HttpStatus.StatusCodes.OK).json(slangs);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.PostWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined || req.body.textToCheck === "")
    {
        console.log("archaism PostWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    
    if (!slangsService.IfWordExists(req.body.textToCheck))
    {
        try {
            var slangs = await slangsService.PostWord(req.body.textToCheck);
            return res.status(HttpStatus.StatusCodes.CREATED).json(slangs);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("archaism PostWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.PutWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined || req.body.textToCheck === "")
    {
        console.log("archaism PutWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (req.params.connectionWord === null || req.params.connectionWord === undefined || req.params.connectionWord === "")
    {
        console.log("archaism PutWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const connectionWord = req.params.connectionWord;
    
    if (!slangsService.IfWordExists(req.body.textToCheck))
    {
        try {
            var slangs = await slangsService.PutWord(req.body.textToCheck, connectionWord);
            return res.status(HttpStatus.StatusCodes.OK).json(slangs);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("archaism PutWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.DeleteWord = async function (req, res) {
    if (req.params.wordToRemove === null || req.params.wordToRemove === undefined || req.params.wordToRemove === "")
    {
        console.log("archaism DeleteWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const wordToRemove = req.params.wordToRemove;
    try {
        var slangs = await slangsService.DeleteWord(wordToRemove);
        return res.status(HttpStatus.StatusCodes.NO_CONTENT).json({result: slangs});
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.DeleteCollection = async function (req, res) {
    try {
        var slangs = await slangsService.DeleteCollection();
        return res.status(HttpStatus.StatusCodes.NO_CONTENT).json({result: slangs});
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}