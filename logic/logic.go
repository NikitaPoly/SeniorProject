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
	var dataJson map[string]string
	json.Unmarshal(([]byte(userData)), &dataJson)
	fmt.Println(dataJson["email"])

	userExistAlready := checkIfUserExists(dataJson["email"])
	//if user does not exist save the id to db
	if !userExistAlready {
		savedb.CreateNewUser(res, dataJson)
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
	//write here
	var dataToSave map[string]string
	json.Unmarshal(([]byte(orderData)), &dataToSave)
	savedb.SaveOrder(res, orderData)
}

//responsible for checking the status of an order and return the correct response 201 for complete and 200 for in progress
func CheckOrderStatus(res http.ResponseWriter, req *http.Request) {
	body, err := ioutil.ReadAll(req.Body)
	if err != nil {
		fmt.Println(err)
	}
	putData := string(body)
	var putJson map[string]string
	json.Unmarshal(([]byte(putData)), &putJson)
	order := getdb.GetUserOrder(putJson)
	if order == nil {
		send.OrderNotFound(res)
		return
	}
	res.WriteHeader(http.StatusOK)
}

//check if user exists and passwords match
func CheckLogin(res http.ResponseWriter, req *http.Request) {
	body, err := ioutil.ReadAll(req.Body)
	if err != nil {
		fmt.Println(err)
	}
	putData := string(body)
	var putJson map[string]string
	json.Unmarshal(([]byte(putData)), &putJson)
	userData := getdb.GetUserInfo(putJson["email"])
	if len(userData) == 0 {
		res.WriteHeader(201)
		return
	}
	actualDataUser := userData[0]
	fmt.Println(putJson)
	fmt.Println(userData)
	if putJson["password"] != actualDataUser["Password"] {
		res.WriteHeader(201)
		return
	}
	res.WriteHeader(http.StatusOK)
}
