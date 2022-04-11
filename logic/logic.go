package logic

import (
	"fmt"
	"net/http"
)

func LoginOrSignupUser(res http.ResponseWriter, req *http.Request) {
	req.ParseForm()
	userData := make(map[string]string)
	for key, value := range req.Form {
		userData[key] = value[0]
	}
	fmt.Println(userData)
}
