package send

import (
	"Server/getResource"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
)

var mimeTypeConverter = map[string]string{
	"svg": "image/svg+xml",
	"jpg": "image/jpeg",
	"pdf": "aplication/pdf",
	"css": "text/css",
	"js":  "text/javascript"}

//send the icon resource
func SendIcon(res http.ResponseWriter, req *http.Request) {
	file, err := ioutil.ReadFile("./res/pt/favicon.ico")
	if err != nil {
		fmt.Println(err)
		return
	}
	res.WriteHeader(http.StatusOK)
	res.Write(file)
}

//send the html page for home
func SendHome(res http.ResponseWriter) {
	file := getResource.GetHTMLPT("home")
	res.WriteHeader(http.StatusOK)
	res.Write(file)
}

//send html page for resume
func SendResume(res http.ResponseWriter) {
	file := getResource.GetHTMLPT("resume")
	res.WriteHeader(http.StatusOK)
	res.Write(file)
}

//send html page for projects
func SendProjects(res http.ResponseWriter) {
	file := getResource.GetHTMLPT("projects")
	res.WriteHeader(http.StatusOK)
	res.Write(file)
}

//send html page for contact
func SendContact(res http.ResponseWriter) {
	file := getResource.GetHTMLPT("contact")
	res.WriteHeader(http.StatusOK)
	res.Write(file)
}

//responsible for sending the not found page
func NotFound(res http.ResponseWriter) {
	notFoundHTML := getResource.GetNotFoundPage()
	res.WriteHeader(http.StatusOK)
	res.Write(notFoundHTML)
}

//send the given resource file
func SendPublicResource(res http.ResponseWriter, ext string, file []byte) {
	res.Header().Set("Content-Type", mimeTypeConverter[ext])
	res.WriteHeader(http.StatusOK)
	res.Write(file)
}

//send the delivery/ login
func SendDLogin(res http.ResponseWriter) {
	file := getResource.GetDeliveryHTML("login")
	res.WriteHeader(http.StatusOK)
	res.Write(file)
}
func SendDEarn(res http.ResponseWriter) {
	file := getResource.GetDeliveryHTML("earn")
	res.WriteHeader(http.StatusOK)
	res.Write(file)
}
func SendDOrder(res http.ResponseWriter) {
	file := getResource.GetDeliveryHTML("order")
	res.WriteHeader(http.StatusOK)
	res.Write(file)
}
func SendDSettings(res http.ResponseWriter) {
	file := getResource.GetDeliveryHTML("settings")
	res.WriteHeader(http.StatusOK)
	res.Write(file)
}
func SendDResource(res http.ResponseWriter, req *http.Request) {
	extension := strings.Split(req.URL.Path, ".")[len(strings.Split(req.URL.Path, "."))-1]
	pageName := strings.Split(req.URL.Path, "/")[2]
	pageName = strings.Split(pageName, ".")[0]
	if extension == "js" {
		file := getResource.GetDeliveryJS(pageName)
		res.WriteHeader(http.StatusOK)
		res.Write(file)
	} else {
		file := getResource.GetDeliveryResource(req.URL.Path)
		res.Header().Set("Content-Type", mimeTypeConverter[extension])
		res.WriteHeader(http.StatusOK)
		res.Write(file)
	}
}
func SendPostNotFound(res http.ResponseWriter) {
	notFoundHTML := getResource.GetNotFoundPage()
	res.WriteHeader(http.StatusNotAcceptable)
	res.Write(notFoundHTML)
}
func SendThankyouforPost(res http.ResponseWriter) {
	file, err := ioutil.ReadFile("./res/pt/HTML/thankyou.html")
	if err != nil {
		fmt.Println(err)
		return
	}
	res.WriteHeader(http.StatusAccepted)
	res.Write(file)
}
