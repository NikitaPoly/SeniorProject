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
	userData := string(body)

	userExistAlready := checkIfUserExists(userData[15 : len(userData)-2])
	//if user does not exist save the id to db
	if !userExistAlready {
		savedb.CreateNewUser(res, userData)
	}
	send.SendDLogin(res)
}

//this function is responsible for venting and sending order to the db
func SaveOrder(res http.ResponseWriter, req *http.Request) {
	body, err := ioutil.ReadAll(req.Body)
	if err != nil {
		fmt.Println(err)
		return
	}
	orderData := string(body)
	savedb.SaveOrder(res, orderData)
}
