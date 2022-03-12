package send

import (
	"io/ioutil"
	"net/http"
)

//send the 404 not found page from base pt website
func NotFound(res http.ResponseWriter) {
	htmlPage, _ := ioutil.ReadFile("./Public.production/pt/HTML/404.html")
	res.WriteHeader(http.StatusNotFound)
	res.Write(htmlPage)
}
