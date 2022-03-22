package routers

import (
	"fmt"
	"net/http"
)

//handles all routing of the main pt page
func PTRouter(res http.ResponseWriter, req *http.Request) {
	switch req.Method {
	case "GET":
		fmt.Println("get pt")
	default:
		res.WriteHeader(http.StatusMethodNotAllowed)
	}
}
func DeliveryRouter(res http.ResponseWriter, req *http.Request) {
	fmt.Println("inside Delivery router")
}
func PublicRouter(res http.ResponseWriter, req *http.Request) {
	fmt.Println("inside pulbic router")
}
