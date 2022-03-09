package main

import (
	"fmt"
	"net/http"
	"os"
)

func test(w http.ResponseWriter, r *http.Request) {
	fmt.Println("inside")
}

func main() {
	fmt.Println("hello")
	//get port at witch this server is runing
	port := os.Getenv("PORT")
	//set default port to 8080 if no port was detected
	if port == "" {
		port = ":8080"
	} else {
		port = ":" + port
	}
	fmt.Println("Running on port: " + port)
	http.HandleFunc("/", test)
	if err := http.ListenAndServe(port, nil); err != nil {
		fmt.Println("cant Start")
	}
}
