package getResource

import (
	"fmt"
	"io/ioutil"
)

func GetPublicResource(path string) []byte {
	file, err := ioutil.ReadFile(path)
	if err != nil {
		fmt.Println(err)
		return nil
	}
	return file
}
func GetHTMLPT(nameOfHTML string) []byte {
	file, err := ioutil.ReadFile("./res/pt/HTML/" + nameOfHTML + ".html")
	if err != nil {
		fmt.Println(err)
		return nil
	}
	return file
}
func GetNotFoundPage() []byte {
	file, err := ioutil.ReadFile("./res/pt/HTML/404.html")
	if err != nil {
		fmt.Println(err)
	}
	return file
}
