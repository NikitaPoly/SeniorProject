package getResource

import (
	"fmt"
	"io/ioutil"
	"strings"
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
func GetDeliveryHTML(nameOfPage string) []byte {
	file, err := ioutil.ReadFile("./res/ptDelivery/" + nameOfPage + "/" + nameOfPage + ".html")
	if err != nil {
		fmt.Println(err)
		return nil
	}
	return file
}
func GetDeliveryJS(nameOfPage string) []byte {
	file, err := ioutil.ReadFile("./res/ptDelivery/" + nameOfPage + "/" + nameOfPage + ".js")
	if err != nil {
		fmt.Println(err)
		return nil
	}
	return file
}
func GetDeliveryResource(path string) []byte {
	splitPath := strings.Split(path, "/")
	splitPath = splitPath[2:]
	finalPath := strings.Join(splitPath, "/")
	file, err := ioutil.ReadFile("./res/ptDelivery/" + finalPath)
	if err != nil {
		fmt.Println(err)
		return nil
	}
	return file
}
