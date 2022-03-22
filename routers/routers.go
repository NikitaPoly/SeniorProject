package routers

import (
	"Server/send"
	"fmt"
	"net/http"
)

//handles all routing of the main pt page
func PTRouter(res http.ResponseWriter, req *http.Request) {
	if req.Method == "GET" {
		switch req.URL.Path {
		case "/":
			send.SendHome(res)
		case "/home":
			send.SendHome(res)
		case "/resume":
			send.SendResume(res)
		case "/projects":
			send.SendProjects(res)
		case "/contact":
			send.SendContact(res)
		default:
			send.NotFound(res)
		}
	} else { //for not supported methods
		res.WriteHeader(http.StatusMethodNotAllowed)
	}
}
func DeliveryRouter(res http.ResponseWriter, req *http.Request) {
	fmt.Println("inside Delivery router")
}
func PublicRouter(res http.ResponseWriter, req *http.Request) {
	fmt.Println("inside pulbic router")
}
