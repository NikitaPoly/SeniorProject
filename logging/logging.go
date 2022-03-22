package logging

import (
	"fmt"
	"os"
)

func LogRequest(path string) {
	file, err := os.OpenFile("./logging/requests.log", os.O_APPEND, 0644)
	if err != nil {
		fmt.Println(err)
	}
	defer file.Close()
	file.WriteString(path + "\n")
}
