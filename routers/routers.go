package routers

import (
	"Server/getResource"
	"Server/getdb"
	"Server/logging"
	"Server/logic"
	"Server/savedb"
	"Server/send"
	"fmt"
	"net/http"
	"strings"
)

//handles all routing of the main pt page
func PTRouter(res http.ResponseWriter, req *http.Request) {
	logging.LogRequest(req.URL.Path)
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
			return
		}
	} else if req.Method == "POST" {
		switch req.URL.Path {
		case "/contact":
			savedb.SaveContact(res, req)
		default:
			send.SendPostNotFound(res)
			return
		}
	} else { //for not supported methods
		res.WriteHeader(http.StatusMethodNotAllowed)
	}
}
func DeliveryRouter(res http.ResponseWriter, req *http.Request) {
	logging.LogRequest(req.URL.Path)
	if req.Method == "GET" {
		switch req.URL.Path {
		case "/delivery":
			send.SendDLogin(res)
		case "/delivery/":
			send.SendDLogin(res)
		case "/delivery/login":
			send.SendDLogin(res)
		case "/delivery/earn":
			send.SendDEarn(res)
		case "/delivery/order":
			send.SendDOrder(res)
		case "/delivery/settings":
			send.SendDSettings(res)
		default:
			send.SendDResource(res, req)
		}
	} else if req.Method == "POST" {
		switch req.URL.Path {
		case "/delivery/login":
			logic.LoginOrSignupUser(res, req)
		case "/delivery/order":
			logic.SaveOrder(res, req)
		}
	} else if req.Method == "PUT" {
		switch req.URL.Path {
		case "/delivery/order":
			logic.CheckOrderStatus(res, req)
		case "/delivery/earn":
			OrdersData := getdb.GetAllOrders(res, req)
			fmt.Println(string(OrdersData))
			if OrdersData == nil {
				//no orders
				res.WriteHeader(201)
				return
			}
			res.WriteHeader(http.StatusOK)
			fmt.Println(OrdersData)
			res.Write(OrdersData)
		}
	}
}
func PublicRouter(res http.ResponseWriter, req *http.Request) {
	logging.LogRequest(req.URL.Path)
	if req.Method == "GET" {
		URLArray := strings.Split(req.URL.Path, "/")[2:]
		extension := strings.Split(req.URL.Path, ".")[1]
		fianlPath := "./res/pt/" + strings.Join(URLArray, "/")
		resourceToSend := getResource.GetPublicResource(fianlPath)
		if resourceToSend == nil {
			fmt.Println("error")
			send.NotFound(res)
			return
		}
		send.SendPublicResource(res, extension, resourceToSend)
	} else {
		res.WriteHeader(http.StatusMethodNotAllowed)
	}
}
