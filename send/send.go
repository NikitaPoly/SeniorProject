package send

import (
	"Server/logging"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
)

var mimeTypes = map[string]string{
	"css": "text/css",
	"jpg": "image/jpeg",
	"svg": "image/svg+xml",
	"js":  "text/javascript",
	"pdf": "application/pdf",
}

func SendNoneHMTLDelivery(res http.ResponseWriter, req *http.Request) {
	splitPath := strings.Split(req.URL.Path, "/")
	splitPath = splitPath[2:]
	extension := strings.Split(req.URL.Path, ".")[len(strings.Split(req.URL.Path, "."))-1]
	file, err := ioutil.ReadFile("./Public/production/ptDelivery/" + strings.Join(splitPath, "/"))
	if err != nil {
		fmt.Println(err)
		logging.Request(req.URL.Path)
		NotFound(res)
		return
	}
	res.Header().Set("content-type", mimeTypes[extension])
	res.WriteHeader(http.StatusOK)
	res.Write(file)
}

//send the 404 not found page from base pt website
func NotFound(res http.ResponseWriter) {
	htmlPage, _ := ioutil.ReadFile("./Public/production/ptDelivery/lost.html")
	fmt.Println("here")
	res.WriteHeader(http.StatusNotFound)
	res.Write(htmlPage)
}
