const tempIrregularsService = require("../services/temp_irregulars.service");
const irregularsService = require("../services/irregulars.service");
var HttpStatus = require('http-status-codes');

exports.GetAllWords = async function (req, res) {
    try {
        var irregulars = await tempIrregularsService.GetAllWords(datacollection);
        return res.status(HttpStatus.StatusCodes.OK).json(irregulars);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.PostWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined || req.body.textToCheck === "")
    {
        console.log("tempIrregulars PostWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (!tempIrregularsService.IfWordExists(datacollection, req.body.textToCheck) && !irregularsService.IfWordExists(req.body.textToCheck))
    {
        try {
            var irregulars = await tempIrregularsService.PostWord(datacollection, datatype, req.body.textToCheck);
            return res.status(HttpStatus.StatusCodes.CREATED).json(irregulars);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("tempIrregulars PostWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.PutWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined || req.body.textToCheck === "")
    {
        console.log("tempIrregulars PutWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (req.params.connectionWord === null || req.params.connectionWord === undefined || req.params.connectionWord === "")
    {
        console.log("tempIrregulars PutWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const connectionWord = req.params.connectionWord;
    
    if (!tempIrregularsService.IfWordExists(datacollection, req.body.textToCheck) && !irregularsService.IfWordExists(req.body.textToCheck))
    {
        try {
            var irregulars = await tempIrregularsService.PutWord(datacollection, datatype, req.body.textToCheck, connectionWord);
            return res.status(HttpStatus.StatusCodes.OK).json(irregulars);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("tempIrregulars PutWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.DeleteWord = async function (req, res) {
    if (req.params.mongoId === null || req.params.mongoId === undefined || req.params.mongoId === "")
    {
        console.log("tempIrregulars DeleteWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const mongoId = req.params.mongoId;
    try {
        var irregulars = await tempIrregularsService.DeleteWord(datacollection, mongoId);
        return res.status(HttpStatus.StatusCodes.NO_CONTENT).json({result: irregulars});
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.DeleteCollection = async function (req, res) {
    try {
        var irregulars = await tempIrregularsService.DeleteCollection(datacollection);
        return res.status(HttpStatus.StatusCodes.NO_CONTENT).json({result: irregulars});
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}