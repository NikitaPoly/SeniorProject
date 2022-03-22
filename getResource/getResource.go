package getResource

import (
	"fmt"
	"io/ioutil"
)

func GetNotFoundPage() []byte {
	file, err := ioutil.ReadFile("./res/pt/HTML/404.html")
	if err != nil {
		fmt.Println(err)
	}
	return file
}
