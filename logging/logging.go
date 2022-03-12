package logging

import (
	"os"
	"time"
)

//logs all requests made
func Request(path string) {
	requestLogFile, _ := os.OpenFile("./logs/requests.log", os.O_APPEND, 0644)
	defer requestLogFile.Close()
	requestLogFile.Write([]byte(time.Now().String() + "at : " + path + "\n"))
}

//logs the port eveyrtime the server is started
func Port(port string) {
	portsLogFile, _ := os.OpenFile("./logs/ports.log", os.O_APPEND, 0644)
	//close the file after use
	defer portsLogFile.Close()
	//now write the file
	portsLogFile.Write([]byte(time.Now().String() + port + "\n"))
}

//logs if the server failed to start
func ServerStartErr(serverFailError error) {
	errorLogFile, _ := os.OpenFile("./logs/serverStart.log", os.O_APPEND, 0644)
	//close the file after use
	defer errorLogFile.Close()
	//now write the file
	errorLogFile.Write([]byte(serverFailError.Error()))
}
