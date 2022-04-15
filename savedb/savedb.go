package savedb

import (
	"Server/send"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const mongoURI = "mongodb+srv://PolyakovDOTTech:Secure@polyakovtechdb.n6fvv.mongodb.net/PolyakovTechDB?retryWrites=true&w=majority"

func dbsaveAction(res http.ResponseWriter, data map[string]string, DBNAME string) {
	//get client for mongodb
	client, err := mongo.NewClient(options.Client().ApplyURI(mongoURI))
	if err != nil {
		fmt.Println(err)
		send.NotFound(res)
		return
	}
	//connext to mongodb using client with 10 second timeout limit
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	if err = client.Connect(ctx); err != nil {
		fmt.Println(err)
		send.NotFound(res)
		return
	}
	//after function is done running this will will run
	defer client.Disconnect(ctx)
	PolyakovTechDB := client.Database("PolyakovTechDB")
	DB := PolyakovTechDB.Collection(DBNAME)
	result, err := DB.InsertOne(ctx, data)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(result.InsertedID)
}

func SaveContact(res http.ResponseWriter, req *http.Request) {
	req.ParseForm()
	dataToSave := make(map[string]string)
	for key, value := range req.Form {
		dataToSave[key] = value[0]
	}
	dbsaveAction(res, dataToSave, "ContactRequest")
	send.SendThankyouforPost(res)
}

//this function creates and saves new user
func CreateNewUser(res http.ResponseWriter, newUserID string) {
	DataToSave := make(map[string]string)

	DataToSave["DeliveryID"] = newUserID[15 : len(newUserID)-2]
	DataToSave["Balance"] = "0"
	DataToSave["TotalBalance"] = "0"
	DataToSave["OrdersStarted"] = "0"
	DataToSave["OrdersCompleted"] = "0"
	currentTime := time.Now()
	DataToSave["birth"] = string(currentTime.Format("01-02-2006"))
	fmt.Println(DataToSave)
	dbsaveAction(res, DataToSave, "DeliveryUsers")
}

func SaveOrder(res http.ResponseWriter, orderData string) {
	var dataToSave map[string]string
	json.Unmarshal(([]byte(orderData)), &dataToSave)
	dbsaveAction(res, dataToSave, "Orders")
}
