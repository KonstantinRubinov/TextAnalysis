const tempSlangsService = require("../services/temp_slangs.service");
const slangsService = require("../services/slangs.service");
var HttpStatus = require('http-status-codes');

exports.GetAllWords = async function (req, res) {
    try {
        var slangs = await tempSlangsService.GetAllWords(datacollection);
        return res.status(HttpStatus.StatusCodes.OK).json(slangs);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.PostWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined || req.body.textToCheck === "")
    {
        console.log("tempSlangs PostWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (!tempSlangsService.IfWordExists(datacollection, req.body.textToCheck) && !slangsService.IfWordExists(req.body.textToCheck))
    {
        try {
            var slangs = await tempSlangsService.PostWord(datacollection, datatype, req.body.textToCheck);
            return res.status(HttpStatus.StatusCodes.CREATED).json(slangs);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("tempSlangs PostWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.PutWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined || req.body.textToCheck === "")
    {
        console.log("tempSlangs PutWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (req.params.connectionWord === null || req.params.connectionWord === undefined || req.params.connectionWord === "")
    {
        console.log("tempSlangs PutWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const connectionWord = req.params.connectionWord;
    
    if (!tempSlangsService.IfWordExists(datacollection, req.body.textToCheck) && !slangsService.IfWordExists(req.body.textToCheck))
    {
        try {
            var slangs = await tempSlangsService.PutWord(datacollection, datatype, req.body.textToCheck, connectionWord);
            return res.status(HttpStatus.StatusCodes.OK).json(slangs);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("tempSlangs PutWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.DeleteWord = async function (req, res) {
    if (req.params.mongoId === null || req.params.mongoId === undefined || req.params.mongoId === "")
    {
        console.log("tempSlangs DeleteWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const mongoId = req.params.mongoId;
    try {
        var slangs = await tempSlangsService.DeleteWord(datacollection, mongoId);
        return res.status(HttpStatus.StatusCodes.NO_CONTENT).json({result: slangs});
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.DeleteCollection = async function (req, res) {
    try {
        var slangs = await tempSlangsService.DeleteCollection(datacollection);
        return res.status(HttpStatus.StatusCodes.NO_CONTENT).json({result: slangs});
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}