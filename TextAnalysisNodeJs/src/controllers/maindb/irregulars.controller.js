const irregularsService = require("../services/irregulars.service");
var HttpStatus = require('http-status-codes');

exports.GetAllWords = async function (req, res) {
    try {
        var irregulars = await irregularsService.GetAllWords();
        return res.status(HttpStatus.StatusCodes.OK).json(irregulars);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.PostWord = async function (req, res) {
    if (req.body === null || req.body === undefined)
    {
        console.log("irregulars PostWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    
    if (!irregularsService.IfWordExists(req.body))
    {
        try {
            var irregular = await irregularsService.PostWord(req.body);
            return res.status(HttpStatus.StatusCodes.CREATED).json(irregular);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("irregulars PostWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.PutWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null)
    {
        console.log("irregulars PutWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (req.params.connectionWord === null || req.params.connectionWord === undefined || req.params.connectionWord === "")
    {
        console.log("irregulars PutWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const connectionWord = req.params.connectionWord;
    
    if (!irregularsService.IfWordExists(req.body))
    {
        try {
            var irregular = await irregularsService.PutWord(req.body, connectionWord);
            return res.status(HttpStatus.StatusCodes.OK).json(irregular);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("irregulars PutWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.DeleteWord = async function (req, res) {
    if (req.params.wordToRemove === null || req.params.wordToRemove === undefined || req.params.wordToRemove === "")
    {
        console.log("irregulars DeleteWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const wordToRemove = req.params.wordToRemove;
    try {
        var irregular = await irregularsService.DeleteWord(wordToRemove);
        return res.status(HttpStatus.StatusCodes.NO_CONTENT).json({result: irregular});
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.DeleteCollection = async function (req, res) {
    try {
        var irregular = await irregularsService.DeleteCollection();
        return res.status(HttpStatus.StatusCodes.NO_CONTENT).json({result: irregular});
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}