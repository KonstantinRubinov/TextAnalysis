var HttpStatus = require('http-status-codes');

exports.AnalyseFullText = async function (req, res) {
    try {
        let textForDebug = "";
        let textForBadRequest = "";

        if (req.body === null || req.body === undefined || req.body.textToCheck === null || req.body.textToCheck === undefined)
        {
            textForDebug = textForDebug + "byWords PostWords Text: " + "Text is null.";
			textForBadRequest = textForBadRequest + "There is no text.";
        }
        if (limit == 0)
		{
			textForDebug = textForDebug + "byWords PostWords Limit: " + "limit is 0.";
			textForBadRequest = textForBadRequest + "There is no words limit.";
		}
        if (!textForDebug.Equals("") || !textForBadRequest.Equals(""))
		{
            console.error(textForDebug);
            return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: textForBadRequest });
		}
        const limit = req.params.limit;
        const textToCheck = req.body.textToCheck;
        const frontType = req.headers['frontType'];
        let analysedText = await fullAnalyticsService.AnalyseFullText(textToCheck, limit, frontType);
        console.log('Text has been Analysed!');
        return res.status(HttpStatus.StatusCodes.OK).json(analysedText);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.CompareAllSentencesWords = async function (req, res) {
    try {
        if (req.body === null || req.body === undefined || req.body.Length == 0)
        {
            console.error("CompareAllSentencesWords PostWords: " + "Data is null.");
            return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "There is no text." });
        }
        const frontType = req.headers['frontType'];
        const text = req.body;
        var analysedText  = await fullAnalyticsService.CompareAllSentencesWords(text, frontType);
        return res.status(HttpStatus.StatusCodes.OK).json(analysedText);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}