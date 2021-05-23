const bcrypt = require("bcrypt");
const userSchema = require("../models/User");
const userAnalitics = require("./userAnalitics.service");

var fs = require('fs');

function isValidIsraeliID(id) {
    id = String(id).trim();
    if (id.length > 9 || id.length < 5 || isNaN(id)){
        return false;
    }
    

    // Pad string with zeros up to 9 digits
    id = id.length < 9 ? ("00000000" + id).slice(-9) : id;

    let res= Array
        .from(id, Number)
        .reduce((counter, digit, i) => {
            const step = digit * ((i % 2) + 1);
            return counter + (step > 9 ? step - 9 : step);
        }) % 10 === 0;

    return res;
}

function createGuid(){  
    function S4() {  
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);  
    }  
    return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();  
}

function GetAllUsers(){
    try {
        var users = userSchema.find();
        return users;
    } catch (error) {
        throw Error(error);
    }
}

function GetOneUser(userID){
    try {
        var user = userSchema.findOne({userID: userID});
        return user;
    } catch (error) {
        throw Error(error);
    }
}

function GetOneUserByName(userNickName){
    try {
        var user = userSchema.findOne({ userNickName: userNickName });
        return user;
    } catch (error) {
        throw Error(error);
    }
}

function GetOneUserByLogin(userNickName, userPassword){
    let getUser;
    try {
        return userSchema.findOne({userNickName: userNickName}).then(user => {
            if (!user || user === undefined) {
                console.error("No User - userNickName not exist");
                throw Error("No User - userNickName not exist")
            }
            else{
                getUser = user;
                return bcrypt.compare(userPassword, getUser.userPassword);
            }
        }).then(response => {
            if (!getUser || getUser === undefined) {
            } else if (response==false || response == undefined) {
                console.error("No User - userNickName not exist");
                throw Error("No User - userNickName not exist")
            } else {
                return getUser
            }
        }).catch(error => {
            console.error("No User " + error.message);
            throw Error("No User " + error.message)
        });
    } catch (error) {
        console.error("No User " + error.message);
        throw Error("No User " + error.message)
    }
}

function AddUser(body){
    return bcrypt.hash(body.userPassword, 10).then((hash) => {
        let extension = "";
        let pictureName = "";
        let filePath="";
        let buff="";
        let fd="";

        if(!isValidIsraeliID(body.userID)){
            throw Error(error);
        }

        if(body.userPicture!==undefined && body.userPicture!==null && body.userPicture!==""){
            extension = body.userPicture.split(".");
            extension = extension[extension.length-1];
            pictureName = createGuid()+"."+extension;
            filePath = "./src/assets/images/users/"+pictureName;
            body.userImage = body.userImage.replace(/^data:image\/\w+;base64,/, "");
            body.userImage = body.userImage.replace(/ /g, '+');
            buff = new Buffer.from(body.userImage, 'base64');
            fd =  fs.openSync(filePath, 'w');
            fs.write(fd, buff, 0, buff.length, 0, function(error,written){
                if (error!=null){
                    fs.closeSync( fd );
                    throw Error(error);
                }
                fs.closeSync( fd );
            });
            
            body.userImage = "";
        }
        
        const user = new userSchema({
            userID: body.userID,
            userFirstName: body.userFirstName,
            userLastName: body.userLastName,
            userNickName:body.userNickName,
            userPassword: hash,
            userEmail: body.userEmail,
            userGender: body.userGender,
            userBirthDate: body.userBirthDate,
            userPicture: pictureName,
            userLevel: body.userLevel,
            userRegistrationDate:Date.now()
        });
        
        return user.save().then((response) => {
            response.userPassword = body.userPassword;
            return response;
        }).catch(error => {
            throw Error(error);
        });
    });
};

function UpdateUser(body, userID){
    try {
        var user = userSchema.findOneAndUpdate(userID, {$set: body});
        return user;
    } catch (error) {
        throw Error(error);
    }
}

function DeleteUser(userID){
    try {
        var user = userSchema.findOneAndRemove({userID: userID}).then((response) => {
            userAnalitics.DeleteUserAnalitics(userID);
            return response;
        }).catch(error => {
            throw Error(error);
        });;
        return user.userNickName;
    } catch (error) {
        throw Error(error);
    }
}

function DeleteUsers(){
    userSchema.deleteMany((error, data) => {
        if (error) {
            throw Error(error);
        } else {
            userAnalitics.DeleteUsersAnalitics();
            return data;
        }
    })
}

module.exports ={
    GetAllUsers:GetAllUsers,
    GetOneUser:GetOneUser,
    GetOneUserByLogin:GetOneUserByLogin,
    AddUser:AddUser,
    UpdateUser:UpdateUser,
    DeleteUser:DeleteUser,
    DeleteUsers:DeleteUsers,
    GetOneUserByName:GetOneUserByName
};