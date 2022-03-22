package send

import (
	"fmt"
	"net/http"
)

//send the icon resource
func SendIcon(res http.ResponseWriter, req *http.Request) {
	fmt.Println("sending icon")
}
