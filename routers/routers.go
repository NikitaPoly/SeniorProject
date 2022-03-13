package routers

import (
	"Server/getResource"
	"Server/logging"
	"Server/send"
	"fmt"
	"net/http"
)

var mimeTypes = map[string]string{
	"css": "text/css",
	"jpg": "image/jpeg",
	"svg": "image/svg+xml",
	"js":  "text/javascript",
	"pdf": "application/pdf",
}

//goes inside the public folder and returens any resource of type not html
func Public(res http.ResponseWriter, req *http.Request) {
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

func Default(res http.ResponseWriter, req *http.Request) {
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
func Delivery(res http.ResponseWriter, req *http.Request) {
	fmt.Println("Delivery entered")
}
func PT(res http.ResponseWriter, req *http.Request) {
	logging.Request(req.RequestURI)
	HTMLPage := getResource.HTMLPT(req.URL.Path, res)
	res.WriteHeader(http.StatusOK)
	res.Write(HTMLPage)
}
