package logic

import (
	"Server/getdb"
	"Server/savedb"
	"Server/send"
	"fmt"
	"net/http"
)

//return true if user id is already saved, otherwise false
func checkIfUserExists(userID string) bool {
	user := getdb.GetUserInfo(userID)
	fmt.Println(user)
	return user != nil
}

//logs in or creates new user for login page
func LoginOrSignupUser(res http.ResponseWriter, req *http.Request) {
	req.ParseForm()
	userData := make(map[string]string)
	for key, value := range req.Form {
		userData[key] = value[0]
	}
	userExistAlready := checkIfUserExists(userData["credential"])
	//if user does not exist save the id to db
	if !userExistAlready {
		savedb.CreateNewUser(res, userData["credential"])
	}
	send.SendDLogin(res)
}
