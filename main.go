package main

import (
	"Server/logging"
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
}
