const antonimService = require("../services/antonim.service");
var HttpStatus = require('http-status-codes');

exports.GetAllWords = async function (req, res) {
    try {
        var allAntonims = await antonimService.GetAllWords();
        console.log('All Antonims found!');
        return res.status(HttpStatus.StatusCodes.OK).json(allAntonims);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.GetWordsBy = async function (req, res) {
    if (req.params.word === null || req.params.word === undefined || req.params.word === "")
    {
        console.log("antonim GetWordsBy: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const word = req.params.word;
    try {
        var antonims = await antonimService.GetWordsBy(word);
        return res.status(HttpStatus.StatusCodes.OK).json(antonims);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.PostWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined || req.body.textToCheck === "")
    {
        console.log("antonim PostWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (req.params.connectionWord === null || req.params.connectionWord === undefined || req.params.connectionWord === "")
    {
        console.log("antonim PostWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const connectionWord = req.params.connectionWord;
    if (!antonimService.IfWordExists(req.body.textToCheck))
    {
        try {
            var antonims = await antonimService.PostWord(req.body.textToCheck, connectionWord);
            return res.status(HttpStatus.StatusCodes.CREATED).json(antonims);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("antonim PostWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.PostCollection = async function (req, res) {
    if (req.body == null || req.body.Count == 0 || req.body==="")
    {
        console.log("antonim PostCollection: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (req.params.connectionWord === null || req.params.connectionWord === undefined || req.params.connectionWord === "")
    {
        console.log("antonim PostCollection: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const connectionWord = req.params.connectionWord;
    try {
        var synonims = await antonimService.PostCollection(req.body.textToCheck, connectionWord);
        return res.status(HttpStatus.StatusCodes.CREATED).json(synonims);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.PutWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined || req.body.textToCheck === "")
    {
        console.log("antonim PutWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (req.params.connectionWord === null || req.params.connectionWord === undefined || req.params.connectionWord === "")
    {
        console.log("antonim PutWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const connectionWord = req.params.connectionWord;
    
    if (!antonimService.IfWordExists(req.body.textToCheck))
    {
        try {
            var antonims = await antonimService.PutWord(req.body.textToCheck, connectionWord);
            return res.status(HttpStatus.StatusCodes.OK).json(antonims);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("antonim PutWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.InsertWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined || req.body.textToCheck === "")
    {
        console.log("antonim InsertWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (req.params.connectionWord === null || req.params.connectionWord === undefined || req.params.connectionWord === "")
    {
        console.log("antonim InsertWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const connectionWord = req.params.connectionWord;
    
    if (!antonimService.IfWordExists(req.body.textToCheck))
    {
        try {
            var antonims = await antonimService.InsertWord(req.body.textToCheck, connectionWord);
            return res.status(HttpStatus.StatusCodes.OK).json(antonims);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("antonim InsertWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.DeleteWord = async function (req, res) {
    if (req.params.wordToRemove === null || req.params.wordToRemove === undefined || req.params.wordToRemove === "")
    {
        console.log("antonim DeleteWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const wordToRemove = req.params.wordToRemove;
    try {
        var antonims = await antonimService.DeleteWord(wordToRemove);
        return res.status(HttpStatus.StatusCodes.NO_CONTENT).json({result: antonims});
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.DeleteCollection = async function (req, res) {
    if (req.params.word === null || req.params.word === undefined || req.params.word === "")
    {
        console.log("antonim DeleteCollection: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const word = req.params.word;
    try {
        var antonims = await antonimService.DeleteCollection(word);
        return res.status(HttpStatus.StatusCodes.NO_CONTENT).json({result: antonims});
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}