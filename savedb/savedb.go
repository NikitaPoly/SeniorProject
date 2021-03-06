package savedb

import (
	"Server/send"
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"time"

	"go.mongodb.org/mongo-driver/bson"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const mongoURI = "mongodb+srv://PolyakovDOTTech:Secure@polyakovtechdb.n6fvv.mongodb.net/PolyakovTechDB?retryWrites=true&w=majority"

func dbupdateAction(res http.ResponseWriter, collection string, id string, field string, new string) {
	fmt.Println(collection)
	fmt.Println(id)
	fmt.Println(field)
	fmt.Println(new)
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
	DB := PolyakovTechDB.Collection(collection)
	var filter bson.M
	var update bson.M
	if collection == "DeliveryUsers" {
		filter = bson.M{"DeliveryID": id}
	} else {
		filter = bson.M{"MYid": id}
	}
	update = bson.M{"$set": bson.M{
		field: new,
	}}
	result, err := DB.UpdateOne(ctx, filter, update)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(result)
}

func dbdeleteAction(res http.ResponseWriter, collectionName string, ID string, filed string) {
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
	DB := PolyakovTechDB.Collection(collectionName)
	_, err = DB.DeleteOne(ctx, bson.M{filed: ID})
	if err != nil {
		fmt.Println(err)
	}

}

func dbsaveAction(res http.ResponseWriter, data map[string]interface{}, DBNAME string) {
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
	_, err = DB.InsertOne(ctx, data)
	if err != nil {
		fmt.Println(err)
	}
}

func SaveContact(res http.ResponseWriter, req *http.Request) {
	req.ParseForm()
	dataToSave := make(map[string]interface{})
	for key, value := range req.Form {
		dataToSave[key] = value[0]
	}
	dbsaveAction(res, dataToSave, "ContactRequest")
	send.SendThankyouforPost(res)
}

//this function creates and saves new user
func CreateNewUser(res http.ResponseWriter, newUserID map[string]string) {
	DataToSave := make(map[string]interface{})

	DataToSave["DeliveryID"] = newUserID["email"]
	DataToSave["Balance"] = "0"
	DataToSave["TotalBalance"] = "0"
	DataToSave["OrdersStarted"] = "0"
	DataToSave["OrdersCompleted"] = "0"
	DataToSave["Password"] = newUserID["password"]
	currentTime := time.Now()
	DataToSave["birth"] = string(currentTime.Format("01-02-2006"))
	dbsaveAction(res, DataToSave, "DeliveryUsers")
}

func SaveOrder(res http.ResponseWriter, orderData string) {
	var dataToSave map[string]interface{}
	json.Unmarshal(([]byte(orderData)), &dataToSave)
	currentTime := time.Now()
	dataToSave["date"] = string(currentTime.Format("01-02-2006"))
	dataToSave["Deliverer"] = ""
	dbsaveAction(res, dataToSave, "Orders")
}

//delete desired order
func DeleteOrder(res http.ResponseWriter, orderID string) {
	dbdeleteAction(res, "Orders", orderID, "MYid")
}

//claimesOrder
func ClaimOrder(res http.ResponseWriter, orderID string, worker string) {
	dbupdateAction(res, "Orders", orderID, "Deliverer", worker)
}

//updates the password to new value
func UpdatePassword(res http.ResponseWriter, newPassword string, email string) {
	if newPassword == "" {
		res.WriteHeader(201)
		return
	}
	dbupdateAction(res, "DeliveryUsers", email, "Password", newPassword)
	res.WriteHeader(200)
}

func DeleteAccount(res http.ResponseWriter, req *http.Request) {
	body, err := ioutil.ReadAll(req.Body)
	if err != nil {
		fmt.Println(err)
	}
	updateData := string(body)
	var updateJson map[string]string
	json.Unmarshal(([]byte(updateData)), &updateJson)

	email := updateJson["email"]
	dbdeleteAction(res, "DeliveryUsers", email, "DeliveryID")
	if len(updateJson["Why"]) > 0 {
		dataToSave := make(map[string]interface{})
		dataToSave["type"] = "Account Delete"
		dataToSave["why"] = updateJson["Why"]
		dbsaveAction(res, dataToSave, "ContactRequest")
	}
}

func SaveNewMondey(res http.ResponseWriter, id string, field string, new string) {
	dbupdateAction(res, "DeliveryUsers", id, field, new)
	res.WriteHeader(200)
}

func SaveNewOrderCompleted(res http.ResponseWriter, id string, field string, new string) {
	dbupdateAction(res, "DeliveryUsers", id, field, new)
}

func SaveNewTotalEarned(res http.ResponseWriter, id string, field string, new string) {
	dbupdateAction(res, "DeliveryUsers", id, field, new)
}

func SaveOrderStartded(res http.ResponseWriter, id string, field string, new string) {
	dbupdateAction(res, "DeliveryUsers", id, field, new)
}
