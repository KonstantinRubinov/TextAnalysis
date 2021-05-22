const tempSynonimService = require("../services/temp_synonim.service");
const synonimService = require("../services/synonim.service");
var HttpStatus = require('http-status-codes');

exports.GetAllWords = async function (req, res) {
    try {
        var synonim = await tempSynonimService.GetAllWords(datacollection);
        return res.status(HttpStatus.StatusCodes.OK).json(synonim);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.PostWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined || req.body.textToCheck === "")
    {
        console.log("tempSynonim PostWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (req.params.connectionWord === null || req.params.connectionWord === undefined || req.params.connectionWord === "")
    {
        console.log("tempSynonim PostWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const connectionWord = req.params.connectionWord;
    if (!tempSynonimService.IfWordExists(datacollection, req.body.textToCheck) && !synonimService.IfWordExists(req.body.textToCheck))
    {
        try {
            var synonim = await tempSynonimService.PostWord(datacollection, datatype, req.body.textToCheck, connectionWord);
            return res.status(HttpStatus.StatusCodes.CREATED).json(synonim);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("tempSynonim PostWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.PutWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined || req.body.textToCheck === "")
    {
        console.log("tempSynonim PutWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (req.params.connectionWord === null || req.params.connectionWord === undefined || req.params.connectionWord === "")
    {
        console.log("tempSynonim PutWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const connectionWord = req.params.connectionWord;
    
    if (!tempSynonimService.IfWordExists(datacollection, req.body.textToCheck) && !synonimService.IfWordExists(req.body.textToCheck))
    {
        try {
            var synonim = await tempSynonimService.PutWord(datacollection, datatype, req.body.textToCheck, connectionWord);
            return res.status(HttpStatus.StatusCodes.OK).json(synonim);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("tempSynonim PutWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.InsertWord = async function (req, res) {
    if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined || req.body.textToCheck === "")
    {
        console.log("tempSynonim InsertWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    if (req.params.connectionWord === null || req.params.connectionWord === undefined || req.params.connectionWord === "")
    {
        console.log("tempSynonim InsertWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const connectionWord = req.params.connectionWord;
    
    if (!tempSynonimService.IfWordExists(datacollection, req.body.textToCheck) && !synonimService.IfWordExists(req.body.textToCheck))
    {
        try {
            var synonim = await tempSynonimService.InsertWord(datacollection, datatype, req.body.textToCheck, connectionWord);
            return res.status(HttpStatus.StatusCodes.OK).json(synonim);
        } catch (error) {
            console.error(error.message);
            return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    } else {
        console.log("tempSynonim InsertWord: " + "Data allready exists.");
        return res.status(HttpStatus.StatusCodes.Conflict).json({ message: "Data allready exists." });
    }
}

exports.DeleteWord = async function (req, res) {
    if (req.params.mongoId === null || req.params.mongoId === undefined || req.params.mongoId === "")
    {
        console.log("tempSynonim DeleteWord: " + "Data is null.");
        return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Data is null." });
    }
    const mongoId = req.params.mongoId;
    try {
        var synonim = await tempSynonimService.DeleteWord(datacollection, mongoId);
        return res.status(HttpStatus.StatusCodes.NO_CONTENT).json({result: synonim});
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.DeleteCollection = async function (req, res) {
    try {
        var synonim = await tempSynonimService.DeleteCollection(datacollection);
        return res.status(HttpStatus.StatusCodes.NO_CONTENT).json({result: synonim});
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}