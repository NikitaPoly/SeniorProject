package getResource

import (
	"Server/logging"
	"Server/send"
	"io/ioutil"
	"net/http"
	"strings"
)

//return the html page for the base website
func HTMLPT(pageName string, res http.ResponseWriter) []byte {
	htmlPage, err := ioutil.ReadFile("./Public/production/pt/HTML/" + pageName + ".html")
	//if there was an error getting html then send the 404 page not found
	if err != nil {
		send.NotFound(res)
		//return nil because error finding html
		return nil
	}
	return htmlPage
}

//returns html for delivery
func HTMLDelivery(requestedPath string, res http.ResponseWriter) []byte {
	logging.Request(requestedPath)
	actualPageName := strings.Split(requestedPath, "/")
	htmlPage, err := ioutil.ReadFile("./Public/production/ptDelivery/" + actualPageName[2] + "/" + actualPageName[2] + ".html")
	if err != nil {
		send.NotFound(res)
		return nil
	}
	return htmlPage
}

//returns all none html resourse for basic pt resume website
func ResourcePT(resourcePath string) ([]byte, string, error) {
	//break the path by the / into a slice
	resourcePathArray := strings.Split(resourcePath, "/")
	//build the path that reflects actual file placment
	resourcePathArray = append(resourcePathArray[:2], "production/pt", resourcePathArray[2], resourcePathArray[3])
	//get the extension of the resource requested
	extension := strings.Split(resourcePathArray[len(resourcePathArray)-1], ".")
	//make the array of paths one string path
	resourcePath = strings.Join(resourcePathArray, "/")
	resourceToSend, err := ioutil.ReadFile("." + resourcePath)
	if err != nil {
		return nil, extension[1], err
	}
	return resourceToSend, extension[1], err
}

//returns none html for /delivery
func ResourceDelivery() {

}
