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
	//handle the delivery website routes
	http.HandleFunc("/delivery/", routers.Login)
	http.HandleFunc("/Delivery/", routers.Login)
	http.HandleFunc("/delivery/login", routers.Login)
	http.HandleFunc("/Delivery/login", routers.Login)
	http.HandleFunc("/delivery/earn", routers.Earn)
	http.HandleFunc("/Delivery/earn", routers.Earn)
	http.HandleFunc("/delivery/order", routers.Order)
	http.HandleFunc("/Delivery/order", routers.Order)
	http.HandleFunc("/delivery/settings", routers.Settings)
	http.HandleFunc("/Delivery/settings", routers.Settings)
	//handlke the public folder requests
	http.HandleFunc("/Public/", routers.Public)
	//handle the request on base / url
	http.HandleFunc("/", routers.Default)
	//start the server
	if err := http.ListenAndServe(port, nil); err != nil {
		logging.ServerStartErr(err)
	}
}
