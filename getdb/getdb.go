package getdb

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"go.mongodb.org/mongo-driver/bson"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const mongoURI = "mongodb+srv://PolyakovDOTTech:Secure@polyakovtechdb.n6fvv.mongodb.net/PolyakovTechDB?retryWrites=true&w=majority"

//returns user info
func GetUserInfo(GUserID string) []bson.M {
	//get client for mongodb
	client, err := mongo.NewClient(options.Client().ApplyURI(mongoURI))
	if err != nil {
		fmt.Println(err)
		return nil
	}
	//connext to mongodb using client with 10 second timeout limit
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	if err = client.Connect(ctx); err != nil {
		fmt.Println(err)
		return nil
	}
	defer client.Disconnect(ctx)

	PolyakovTechDB := client.Database("PolyakovTechDB")
	DB := PolyakovTechDB.Collection("DeliveryUsers")

	cursor, err := DB.Find(ctx, bson.M{"DeliveryID": GUserID})
	if err != nil {
		fmt.Println(err)
		return nil
	}
	var userDataFinal []bson.M
	if err = cursor.All(ctx, &userDataFinal); err != nil {
		fmt.Println(err)
		return nil
	}
	return userDataFinal
}

//gets the order of user
func GetUserOrder(orderID map[string]string) []bson.M {
	//get client for mongodb
	client, err := mongo.NewClient(options.Client().ApplyURI(mongoURI))
	if err != nil {
		fmt.Println(err)
		return nil
	}
	//connext to mongodb using client with 10 second timeout limit
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	if err = client.Connect(ctx); err != nil {
		fmt.Println(err)
		return nil
	}
	defer client.Disconnect(ctx)

	PolyakovTechDB := client.Database("PolyakovTechDB")
	DB := PolyakovTechDB.Collection("Orders")

	cursor, err := DB.Find(ctx, bson.M{"MYid": orderID["orderID"]})
	if err != nil {
		fmt.Println(err)
		return nil
	}
	var orderData []bson.M
	if err = cursor.All(ctx, &orderData); err != nil {
		fmt.Println(err)
		return nil
	}
	fmt.Println(orderData)
	return orderData
}

//returns nil or a list of orders
func GetAllOrders(res http.ResponseWriter, req *http.Request) []byte {
	//get client for mongodb
	client, err := mongo.NewClient(options.Client().ApplyURI(mongoURI))
	if err != nil {
		fmt.Println(err)
		return nil
	}
	//connext to mongodb using client with 10 second timeout limit
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	if err = client.Connect(ctx); err != nil {
		fmt.Println(err)
		return nil
	}
	defer client.Disconnect(ctx)

	PolyakovTechDB := client.Database("PolyakovTechDB")
	DB := PolyakovTechDB.Collection("Orders")

	cursor, err := DB.Find(ctx, bson.M{})
	if err != nil {
		fmt.Println(err)
		return nil
	}
	var orderData []bson.M
	if err = cursor.All(ctx, &orderData); err != nil {
		fmt.Println(err)
		return nil
	}
	final, _ := json.Marshal(orderData)
	return final
}
