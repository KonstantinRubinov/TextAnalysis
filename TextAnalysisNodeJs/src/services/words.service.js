function AddSimpleWords(path){
    path = path + 'SimpleWords'
    try {
        var users = userSchema.find();
        return users;
    } catch (error) {
        throw Error(error);
    }
}

module.exports ={
    GetAllUsers:GetAllUsers,
    GetOneUser:GetOneUser,
    ReturnUserByNamePassword:ReturnUserByNamePassword,
    AddUser:AddUser,
    UpdateUser:UpdateUser,
    DeleteUser:DeleteUser,
    DeleteUsers:DeleteUsers
};