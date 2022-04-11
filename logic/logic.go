package logic

import (
	"fmt"
	"net/http"
)

func checkIfUserExists(userID string) bool {
	return false
}

func LoginOrSignupUser(res http.ResponseWriter, req *http.Request) {
	req.ParseForm()
	userData := make(map[string]string)
	for key, value := range req.Form {
		userData[key] = value[0]
	}
	//userExistAlready := checkIfUserExists(userData["credential"])
	fmt.Println(userData["credential"])
}
