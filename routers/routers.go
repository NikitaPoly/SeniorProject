package routers

import (
	"Server/getResource"
	"Server/logging"
	"Server/send"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
)

//help set the mime type of extensions
var mimeTypes = map[string]string{
	"css": "text/css",
	"jpg": "image/jpeg",
	"svg": "image/svg+xml",
	"js":  "text/javascript",
	"pdf": "application/pdf",
}

//respomsible for routing all requests to do with database and othere manipulations on backend
func Logic(res http.ResponseWriter, req *http.Request) {
	fmt.Println("in the logic path")
}

//goes inside the public folder and returens any resource of type not html
func Public(res http.ResponseWriter, req *http.Request) {
	if req.Method == "GET" {
		logging.Request(req.RequestURI)
		resToSend, extension, err := getResource.ResourcePT(req.URL.Path)
		//if there is an error gettig resource return 404 and stop the response
		if err != nil {
			send.NotFound(res)
			fmt.Println(err)
			return
		}
		res.Header().Set("content-type", mimeTypes[extension])
		res.WriteHeader(http.StatusOK)
		res.Write(resToSend)
	}
}

//respinsible for / html
func Default(res http.ResponseWriter, req *http.Request) {
	if req.Method == "GET" {
		//log the request
		logging.Request(req.RequestURI)
		//get the correct HTML Page. will stop here and return 404 if html is not found
		htmlPage := getResource.HTMLPT("home", res)
		//exit function because there was an error in finding html so 4040 was sent
		if htmlPage == nil {
			return
		}
		//set the status to ok
		res.WriteHeader(http.StatusOK)
		//send the page
		res.Write(htmlPage)
	}
}

//Delivery handler
func DeliveryHandle(res http.ResponseWriter, req *http.Request) {
	path := req.URL.Path
	if path == "/delivery/" {
		req.URL.Path = "/delivery/login"
		Login(res, req)
		return
	}
	pageName := strings.Split(path, "/")
	pageName[2] = strings.Split(pageName[2], ".")[0]
	logging.Request(req.URL.Path)
	switch pageName[2] {
	case "/":
		Login(res, req)
	case "login":
		Login(res, req)
	case "earn":
		Earn(res, req)
	case "order":
		Order(res, req)
	case "settings":
		Settings(res, req)
	default:
		send.SendNoneHMTLDelivery(res, req)
	}
}

//this is responsible for the handling of /delivery and /delivery/login
func Login(res http.ResponseWriter, req *http.Request) {
	if req.Method == "GET" {
		logging.Request(req.RequestURI)
		switch req.URL.Path {
		case "/delivery/login":
			HTML := getResource.HTMLDilvery("login")
			res.WriteHeader(http.StatusOK)
			res.Write(HTML)
			return
		case "/delivery/login.js":
			jsFile := getResource.DeliveyrJS("login", res)
			res.WriteHeader(http.StatusOK)
			res.Write(jsFile)
			return
		default:
			send.NotFound(res)
		}
	}
}

//this is responsible for the handling of /delivery/earn
func Earn(res http.ResponseWriter, req *http.Request) {
	if req.Method == "GET" {
		logging.Request(req.RequestURI)
		switch req.URL.Path {
		case "/delivery/earn":
			HTML := getResource.HTMLDilvery("earn")
			res.WriteHeader(http.StatusOK)
			res.Write(HTML)
			return
		case "/delivery/earn.js":
			jsFile := getResource.DeliveyrJS("earn", res)
			res.WriteHeader(http.StatusOK)
			res.Write(jsFile)
			return
		default:
			send.NotFound(res)
		}
	}
}

//this is responsible for the handling of /delivery/order
func Order(res http.ResponseWriter, req *http.Request) {
	if req.Method == "GET" {
		logging.Request(req.RequestURI)
		switch req.URL.Path {
		case "/delivery/order":
			HTML := getResource.HTMLDilvery("order")
			res.WriteHeader(http.StatusOK)
			res.Write(HTML)
			return
		case "/delivery/order.js":
			jsFile := getResource.DeliveyrJS("order", res)
			res.WriteHeader(http.StatusOK)
			res.Write(jsFile)
			return
		default:
			send.NotFound(res)
		}
	}
}

//this is responsible for the handling of  /delivery/settings
func Settings(res http.ResponseWriter, req *http.Request) {
	if req.Method == "GET" {
		logging.Request(req.RequestURI)
		switch req.URL.Path {
		case "/delivery/settings":
			HTML := getResource.HTMLDilvery("settings")
			res.WriteHeader(http.StatusOK)
			res.Write(HTML)
			return
		case "/delivery/settings.js":
			jsFile := getResource.DeliveyrJS("settings", res)
			res.WriteHeader(http.StatusOK)
			res.Write(jsFile)
			return
		default:
			send.NotFound(res)
		}
	}
}

//this is responsible for handling pt html requests
func PT(res http.ResponseWriter, req *http.Request) {
	if req.Method == "GET" {
		logging.Request(req.RequestURI)
		HTMLPage := getResource.HTMLPT(req.URL.Path, res)
		res.WriteHeader(http.StatusOK)
		res.Write(HTMLPage)
	}
}

//sends the favicon
func Favicon(res http.ResponseWriter, req *http.Request) {
	icon, err := ioutil.ReadFile("./Public/production/pt/favicon.ico")
	if err != nil {
		fmt.Println(err)
		send.NotFound(res)
	}
	logging.Request(req.RequestURI)
	res.WriteHeader(http.StatusOK)
	res.Write(icon)
}
