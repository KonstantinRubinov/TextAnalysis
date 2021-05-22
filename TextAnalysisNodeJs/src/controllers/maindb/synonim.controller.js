const synonimService = require("../services/synonim.service");
var HttpStatus = require('http-status-codes');

exports.GetAllWords = async function (req, res) {
    try {
        var allSynonims = await synonimService.GetAllWords();
        console.log('All Synonims found!');
        return res.status(HttpStatus.StatusCodes.OK).json(allSynonims);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.GetWordsBy = async function (req, res) {
    if (req.params.word === null || req.params.word === undefined || req.params.word === "")
    {
        console.log("synonim GetWordsBy: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const word = req.params.word;
    try {
        var synonims = await synonimService.GetWordsBy(word);
        return res.status(HttpStatus.StatusCodes.OK).json(synonims);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.PostWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined || req.body.textToCheck === "")
    {
        console.log("synonim PostWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (!synonimService.IfWordExists(req.body.textToCheck))
    {
        try {
            var synonims = await synonimService.PostWord(req.body.textToCheck);
            return res.status(HttpStatus.StatusCodes.CREATED).json(synonims);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("synonim PostWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.PutWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined || req.body.textToCheck === "")
    {
        console.log("synonim PutWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (req.params.connectionWord === null || req.params.connectionWord === undefined || req.params.connectionWord === "")
    {
        console.log("synonim PutWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const connectionWord = req.params.connectionWord;
    
    if (!synonimService.IfWordExists(req.body.textToCheck))
    {
        try {
            var antonims = await synonimService.PutWord(req.body.textToCheck, connectionWord);
            return res.status(HttpStatus.StatusCodes.OK).json(antonims);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("synonim PutWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.InsertWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined || req.body.textToCheck === "")
    {
        console.log("synonim InsertWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (req.params.connectionWord === null || req.params.connectionWord === undefined || req.params.connectionWord === "")
    {
        console.log("synonim InsertWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const connectionWord = req.params.connectionWord;
    
    if (!antonimService.IfWordExists(req.body.textToCheck))
    {
        try {
            var synonims = await synonimService.InsertWord(req.body.textToCheck, connectionWord);
            return res.status(HttpStatus.StatusCodes.OK).json(synonims);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("synonim InsertWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.DeleteWord = async function (req, res) {
    if (req.params.wordToRemove === null || req.params.wordToRemove === undefined || req.params.wordToRemove === "")
    {
        console.log("synonim DeleteWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const wordToRemove = req.params.wordToRemove;
    try {
        var synonims = await synonimService.DeleteWord(wordToRemove);
        return res.status(HttpStatus.StatusCodes.NO_CONTENT).json({result: synonims});
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.DeleteCollection = async function (req, res) {
    if (req.params.word === null || req.params.word === undefined || req.params.word === "")
    {
        console.log("synonim DeleteCollection: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const word = req.params.word;
    try {
        var synonims = await synonimService.DeleteCollection(word);
        return res.status(HttpStatus.StatusCodes.NO_CONTENT).json({result: synonims});
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}