const tempExpressionsService = require("../services/temp_expressions.service");
const expressionsService = require("../services/expressions.service");
var HttpStatus = require('http-status-codes');

exports.GetAllWords = async function (req, res) {
    try {
        var expressions = await tempExpressionsService.GetAllWords(datacollection);
        return res.status(HttpStatus.StatusCodes.OK).json(expressions);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.PostWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined || req.body.textToCheck === "")
    {
        console.log("tempExpressions PostWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (!tempExpressionsService.IfWordExists(datacollection, req.body.textToCheck) && !expressionsService.IfWordExists(req.body.textToCheck))
    {
        try {
            var expressions = await tempExpressionsService.PostWord(datacollection, datatype, req.body.textToCheck);
            return res.status(HttpStatus.StatusCodes.CREATED).json(expressions);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("tempExpressions PostWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.PutWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined || req.body.textToCheck === "")
    {
        console.log("tempExpressions PutWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (req.params.connectionWord === null || req.params.connectionWord === undefined || req.params.connectionWord === "")
    {
        console.log("tempExpressions PutWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const connectionWord = req.params.connectionWord;
    
    if (!tempExpressionsService.IfWordExists(datacollection, req.body.textToCheck) && !expressionsService.IfWordExists(req.body.textToCheck))
    {
        try {
            var expressions = await tempExpressionsService.PutWord(datacollection, datatype, req.body.textToCheck, connectionWord);
            return res.status(HttpStatus.StatusCodes.OK).json(expressions);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("tempExpressions PutWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.DeleteWord = async function (req, res) {
    if (req.params.mongoId === null || req.params.mongoId === undefined || req.params.mongoId === "")
    {
        console.log("tempExpressions DeleteWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const mongoId = req.params.mongoId;
    try {
        var expressions = await tempExpressionsService.DeleteWord(datacollection, mongoId);
        return res.status(HttpStatus.StatusCodes.NO_CONTENT).json({result: expressions});
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.DeleteCollection = async function (req, res) {
    try {
        var expressions = await tempExpressionsService.DeleteCollection(datacollection);
        return res.status(HttpStatus.StatusCodes.NO_CONTENT).json({result: expressions});
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}