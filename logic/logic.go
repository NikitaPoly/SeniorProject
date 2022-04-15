package logic

import (
	"Server/getdb"
	"Server/savedb"
	"Server/send"
	"encoding/json"
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
	fmt.Println("oder data")
	fmt.Println(orderData)
	savedb.SaveOrder(res, orderData)
}

//responsible for checking the status of an order and return the correct response 201 for complete and 200 for in progress
func CheckOrderStatus(res http.ResponseWriter, req *http.Request) {
	body, err := ioutil.ReadAll(req.Body)
	fmt.Println("body is")
	fmt.Println(body)
	if err != nil {
		fmt.Println(err)
	}
	putData := string(body)
	var putJson map[string]string
	json.Unmarshal(([]byte(putData)), &putJson)
	fmt.Println(putJson)
}
