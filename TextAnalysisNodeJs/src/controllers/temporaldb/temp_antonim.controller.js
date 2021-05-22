const tempAntonimService = require("../services/temp_antonim.service");
const antonimService = require("../services/antonim.service");
var HttpStatus = require('http-status-codes');

exports.GetAllWords = async function (req, res) {
    try {
        var antonims = await tempAntonimService.GetAllWords(datacollection);
        return res.status(HttpStatus.StatusCodes.OK).json(antonims);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.PostWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined || req.body.textToCheck === "")
    {
        console.log("tempAntonim PostWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (req.params.connectionWord === null || req.params.connectionWord === undefined || req.params.connectionWord === "")
    {
        console.log("tempAntonim PostWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const connectionWord = req.params.connectionWord;
    if (!tempAntonimService.IfWordExists(datacollection, req.body.textToCheck) && !antonimService.IfWordExists(req.body.textToCheck))
    {
        try {
            var antonims = await tempAntonimService.PostWord(datacollection, datatype, req.body.textToCheck, connectionWord);
            return res.status(HttpStatus.StatusCodes.CREATED).json(antonims);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("tempAntonim PostWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.PutWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined || req.body.textToCheck === "")
    {
        console.log("tempAntonim PutWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (req.params.connectionWord === null || req.params.connectionWord === undefined || req.params.connectionWord === "")
    {
        console.log("tempAntonim PutWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const connectionWord = req.params.connectionWord;
    
    if (!tempAntonimService.IfWordExists(datacollection, req.body.textToCheck) && !antonimService.IfWordExists(req.body.textToCheck))
    {
        try {
            var antonims = await tempAntonimService.PutWord(datacollection, datatype, req.body.textToCheck, connectionWord);
            return res.status(HttpStatus.StatusCodes.OK).json(antonims);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("tempAntonim PutWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.InsertWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined || req.body.textToCheck === "")
    {
        console.log("tempAntonim InsertWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (req.params.connectionWord === null || req.params.connectionWord === undefined || req.params.connectionWord === "")
    {
        console.log("tempAntonim InsertWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const connectionWord = req.params.connectionWord;
    
    if (!tempAntonimService.IfWordExists(datacollection, req.body.textToCheck) && !antonimService.IfWordExists(req.body.textToCheck))
    {
        try {
            var antonims = await tempAntonimService.InsertWord(datacollection, datatype, req.body.textToCheck, connectionWord);
            return res.status(HttpStatus.StatusCodes.OK).json(antonims);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("tempAntonim InsertWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.DeleteWord = async function (req, res) {
    if (req.params.mongoId === null || req.params.mongoId === undefined || req.params.mongoId === "")
    {
        console.log("tempAntonim DeleteWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const mongoId = req.params.mongoId;
    try {
        var antonims = await antonimService.DeleteWord(datacollection, mongoId);
        return res.status(HttpStatus.StatusCodes.NO_CONTENT).json({result: antonims});
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.DeleteCollection = async function (req, res) {
    try {
        var antonims = await antonimService.DeleteCollection(datacollection);
        return res.status(HttpStatus.StatusCodes.NO_CONTENT).json({result: antonims});
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}