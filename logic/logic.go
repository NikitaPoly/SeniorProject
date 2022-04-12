package logic

import (
	"Server/getdb"
	"Server/savedb"
	"Server/send"
	"fmt"
	"io/ioutil"
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
	body, err := ioutil.ReadAll(req.Body)
	if err != nil {
		fmt.Println(err)
	}
	userData := make(map[string]string)
	for key, value := range req.Form {
		userData[key] = value[0]
	}
	fmt.Println("userDataonw")
	fmt.Println(body)
	userExistAlready := checkIfUserExists(userData["DeliveryID"])
	//if user does not exist save the id to db
	if !userExistAlready {
		savedb.CreateNewUser(res, userData["DeliveryID"])
	}
	send.SendDLogin(res)
}
