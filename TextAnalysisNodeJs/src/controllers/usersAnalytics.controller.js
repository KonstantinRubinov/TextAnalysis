var HttpStatus = require('http-status-codes');

exports.GetAllUserAnalitics = async function (req, res) {
    try {
        let allUsersAnalitics = await usersAnalyticsService.GetAllUserAnalitics();
        return res.status(HttpStatus.StatusCodes.OK).json(allUsersAnalitics);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.GetUserAnaliticsByDates = async function (req, res) {
    try {
        const startDate = req.params.startDate;
        const endDate = req.params.endDate;
        let allUsersAnalitics = await usersAnalyticsService.GetUserAnaliticsByDates(startDate, endDate);
        return res.status(HttpStatus.StatusCodes.OK).json(allUsersAnalitics);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.GetUserAnaliticsByStart = async function (req, res) {
    try {
        const startDate = req.params.startDate;
        let allUsersAnalitics = await usersAnalyticsService.GetUserAnaliticsByStart(startDate);
        return res.status(HttpStatus.StatusCodes.OK).json(allUsersAnalitics);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

exports.GetUserAnaliticsByEnd = async function (req, res) {
    try {
        const endDate = req.params.endDate;
        let allUsersAnalitics = await usersAnalyticsService.GetUserAnaliticsByEnd(endDate);
        return res.status(HttpStatus.StatusCodes.OK).json(allUsersAnalitics);
    } catch (error) {
        console.error(error.message);
        return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}