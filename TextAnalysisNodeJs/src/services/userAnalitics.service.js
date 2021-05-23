const userForStatisticsSchema = require("../entity/userForStatistics");
const joinedModels = require("../models/JoinedModels");

let fullData=[];

function AddItem(item){
    console.debug(item);

    if(item!=null && item.user!=null){
        let model = {
            userID:item.userID,
            userRegistrationDate:item.userRegistrationDate,
            userLoginDate:item.userLoginDate,
            userFirstName:item.user.userFirstName,
            userLastName:item.user.userLastName,
            userNickName:item.user.userNickName,
            userPassword:item.user.userPassword,
            userEmail:item.user.userEmail,
            userGender:item.user.userGender,
            userBirthDate:item.user.userBirthDate,
            userLevel:item.user.userLevel,
            userPicture:item.user.userPicture != null ? "src/assets/images/users/" + item.user.carPicture : null,
        };
        fullData.push(model);
    }
}

function AddUserToLoginAnalitics(user)
{
    const userForStatistics = new userForStatisticsSchema({
        userID: user.userID,
        userRegistrationDate: user.userRegistrationDate,
        userLoginDate: user.userLoginDate
    });
    
	return userForStatistics.save().then((response) => {
        return response;
    }).catch(error => {
        throw Error(error);
    });
}

function GetAllUserAnalitics()
{
    return joinedModels.UserForStatistics.populate("User")
    .then(function(response) {
        response.forEach(AddItem);
        return fullData;
    })
    .catch(function(error) {
        throw Error(error);
    });
}

function GetUserAnaliticsByDates(startDate, endDate)
{
	return joinedModels.UserForStatistics.find({ userLoginDate: { $gte: startDate, $lte: endDate } }).populate("User")
    .then(function(response) {
        response.forEach(AddItem);
        return fullData;
    })
    .catch(function(error) {
        throw Error(error);
    });
}

function GetUserAnaliticsByStart(startDate)
{
	return joinedModels.UserForStatistics.find({ userLoginDate: { $gte: startDate } }).populate("User")
    .then(function(response) {
        response.forEach(AddItem);
        return fullData;
    })
    .catch(function(error) {
        throw Error(error);
    });
}

function GetUserAnaliticsByEnd(endDate)
{
	return joinedModels.UserForStatistics.find({ userLoginDate: { $lte: endDate } }).populate("User")
    .then(function(response) {
        response.forEach(AddItem);
        return fullData;
    })
    .catch(function(error) {
        throw Error(error);
    });
}

function DeleteUserAnalitics(userID){
    try {
        var user = userForStatisticsSchema.findOneAndRemove({userID: userID});
        return user.userNickName;
    } catch (error) {
        throw Error(error);
    }
}

function DeleteUsersAnalitics(){
    userForStatisticsSchema.deleteMany((error, data) => {
        if (error) {
            throw Error(error);
        } else {
            return data;
        }
    })
}

module.exports ={
    AddUserToLoginAnalitics:AddUserToLoginAnalitics,
    GetAllUserAnalitics:GetAllUserAnalitics,
    GetUserAnaliticsByDates:GetUserAnaliticsByDates,
    GetUserAnaliticsByStart:GetUserAnaliticsByStart,
    GetUserAnaliticsByEnd:GetUserAnaliticsByEnd,
    DeleteUserAnalitics:DeleteUserAnalitics,
    DeleteUsersAnalitics:DeleteUsersAnalitics 
};