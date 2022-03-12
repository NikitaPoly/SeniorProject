package logging

import (
	"fmt"
	"os"
	"time"
)

func Port(port string) {
	portsLogFile, err := os.OpenFile("./logs/ports.log", os.O_APPEND, 0644)
	if err != nil {
		fmt.Println(err)
	}
	//close the file after use
	defer portsLogFile.Close()
	//now write the file
	_, err = portsLogFile.Write([]byte(time.Now().String() + port + "\n"))
	if err != nil {
		fmt.Println(err)
	}
}
func ServerStartErr(err error) {
	errorLogFile, err := os.OpenFile("./logs/serverStart.log", os.O_APPEND, 0644)
	if err != nil {
		fmt.Println(err)
	}
	//close the file after use
	defer errorLogFile.Close()
	//now write the file
	_, err = errorLogFile.Write([]byte(err.Error()))
	if err != nil {
		fmt.Println(err)
	}
}
