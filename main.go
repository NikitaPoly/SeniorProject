package main

import (
	"Server/logging" //custom package for logging stuff
	"Server/routers" //custome package for directing requests to correct functions for proccesing and responses
	"net/http"
	"os"
)

func main() {
	//get port and set it to 8080 if none is dedected
	port := os.Getenv("PORT")
	if port == "" {
		port = ":8080"
	} else {
		port = ":" + port
	}
	//log the port #
	logging.Port(port)
	//handle the base profile website routes
	baseWebsitePaths := [8]string{"/contact", "/home", "/projects", "/resume", "/Contact", "/Home", "/Projects", "/Resume"}
	for i := 0; i < len(baseWebsitePaths); i++ {
		http.HandleFunc(baseWebsitePaths[i], routers.PT)
	}
	//handle the routes for logic on the delivery app
	http.HandleFunc("/logic/", routers.Logic)
	//handle the delivery website routes
	http.HandleFunc("/delivery/", routers.DeliveryHandle)
	//handlke the public folder requests
	http.HandleFunc("/Public/", routers.Public)
	//favicon
	http.HandleFunc("/favicon.ico", routers.Favicon)
	//handle the request on base / url
	http.HandleFunc("/", routers.Default)
	//start the server
	if err := http.ListenAndServe(port, nil); err != nil {
		logging.ServerStartErr(err)
	}
}
