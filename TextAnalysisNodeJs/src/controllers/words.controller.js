const wordsService = require("../services/words.service");
var HttpStatus = require('http-status-codes');

exports.AddSimpleWords = async function (req, res) {
    try {
        let simleWords = await wordsService.AddSimpleWords(filePath);
        return res.status(HttpStatus.StatusCodes.OK).json(simleWords);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.AddIrregulars = async function (req, res) {
    try {
        let irregulars  = await wordsService.AddIrregulars(filePath);
        return res.status(HttpStatus.StatusCodes.OK).json(irregulars);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.AddRelationalWords = async function (req, res) {
    try {
        let relationalWords = await wordsService.AddRelationalWords(filePath);
        return res.status(HttpStatus.StatusCodes.OK).json(relationalWords);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.DeleteAllWords = async function (req, res) {
    try {
        let deleted = await wordsService.DeleteAllWords();
        return res.status(HttpStatus.StatusCodes.NO_CONTENT).json(deleted);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.AddTemporalSimpleWords = async function (req, res) {
    try {
        let simleWords = await wordsService.AddTemporalSimpleWords(filePath);
        return res.status(HttpStatus.StatusCodes.OK).json(simleWords);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.AddTemporalIrregulars = async function (req, res) {
    try {
        let irregulars  = await wordsService.AddTemporalIrregulars(filePath);
        return res.status(HttpStatus.StatusCodes.OK).json(irregulars);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.AddTemporalRelationalWords = async function (req, res) {
    try {
        let relationalWords = await wordsService.AddTemporalRelationalWords(filePath);
        return res.status(HttpStatus.StatusCodes.OK).json(relationalWords);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.DeleteAllTemporalWords = async function (req, res) {
    try {
        let deleted = await wordsService.DeleteAllTemporalWords();
        return res.status(HttpStatus.StatusCodes.NO_CONTENT).json(deleted);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.GetAllTemporalWords = async function (req, res) {
    try {
        let temporalObjects = await wordsService.GetAllTemporalWords();
        return res.status(HttpStatus.StatusCodes.OK).json(temporalObjects);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.GetAllWords = async function (req, res) {
    try {
        let temporalObjects = await wordsService.GetAllWords();
        return res.status(HttpStatus.StatusCodes.OK).json(temporalObjects);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}