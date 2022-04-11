package logic

import (
	"Server/savedb"
	"net/http"
)

//return true if user id is already saved, otherwise false
func checkIfUserExists(userID string) bool {
	return false
}

//logs in or creates new user for login page
func LoginOrSignupUser(res http.ResponseWriter, req *http.Request) {
	req.ParseForm()
	userData := make(map[string]string)
	for key, value := range req.Form {
		userData[key] = value[0]
	}
	userExistAlready := checkIfUserExists(userData["credential"])
	if !userExistAlready {
		savedb.CreateNewUser(res, userData["credential"])
	}
}
