package main

import (
	"Server/routers" //custome package for directing requests to correct functions for proccesing and responses
	"Server/send"
	"fmt"
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
	//handle the base profile website routes
	baseWebsitePaths := [8]string{"/contact", "/home", "/projects", "/resume", "/Contact", "/Home", "/Projects", "/Resume"}
	for i := 0; i < len(baseWebsitePaths); i++ {
		http.HandleFunc(baseWebsitePaths[i], routers.PTRouter)
	}
	//handle the delivery website routes
	http.HandleFunc("/delivery", routers.DeliveryRouter)
	http.HandleFunc("/delivery/", routers.DeliveryRouter)
	//handlke the public folder requests
	http.HandleFunc("/Public/", routers.PublicRouter)
	//favicon
	http.HandleFunc("/favicon.ico", send.SendIcon)
	//handle the request on base / url
	http.HandleFunc("/", routers.PTRouter)
	//start the server
	if err := http.ListenAndServe(port, nil); err != nil {
		fmt.Println(err)
	}
}
