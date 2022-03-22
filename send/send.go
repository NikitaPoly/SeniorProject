package send

import (
	"Server/getResource"
	"fmt"
	"net/http"
)

var mimeTypeConverter = map[string]string{
	"svg": "image/svg+xml",
	"jpg": "image/jpeg",
	"pdf": "aplication/pdf",
	"css": "text/css",
	"js":  "text/javascript"}

//send the icon resource
func SendIcon(res http.ResponseWriter, req *http.Request) {
	fmt.Println("sending icon")
}

//send the html page for home
func SendHome(res http.ResponseWriter) {

}

//send html page for resume
func SendResume(res http.ResponseWriter) {

}

//send html page for projects
func SendProjects(res http.ResponseWriter) {

}

//send html page for contact
func SendContact(res http.ResponseWriter) {

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
