import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const client = new MongoClient(process.env.URI);
const db = client.db(process.env.DB_NAME);
const collection1 = db.collection(process.env.COLLECTION_NAME1)
const collection2 = db.collection(process.env.COLLECTION_NAME2)
const collection3 = db.collection(process.env.COLLECTION_NAME3)
// const collectionMerge = [...collection1, ...collection2,...collection3]


// Pizza grouups
const pizza1 = {
    pizza_name:"Cheese Pizza",
    sauce:"red",
    topping1:"cheese",
    size:"medium",
    pizzaID: "p1",
}
const pizza2 = {
    pizza_name:"White Pizza",
    sauce:"white",
    size:"Large",
    pizzaID: "p2",
}
const pizza3 = {
    pizza_name:"Meat Lover",
    topping1:"pepperoni",
    topping2:"Meatballs",
    topping3:"sausage",
    sauce:"red",
    pizzaID: "p3"
};


// Customer groups
const customer1 = {
    first_name:"Bill",
    last_name:"Jones",
    phone_number:"222-222-2222",
    email:"email123@email.com",
    address1:"444 pizza Ln, Boca Raton, FL 33433",
    rewards_member:true,
    customerID:"c1"
};
const customer2 = {
    first_name:"Jane",
    last_name:"Deer",
    phone_number:"555-555-5555",
    email:"thisisemail.@email.com",
    address1:"432 Pepperoni ct. pbg, FL 33410",
    rewards_member:false,
    customerID:"c2"
};

// Order groups
const order1 = {
    pizzaID: "p1",
    customerID:"c1",
    addtopping1: "sausage",
    style:"original",
    size:"medium",
    cost: 10.99,
    delivery: true
};
const order2 = {
    pizzaID: "p2",
    customerID:"c2",
    addtopping1: "onions",
    style:"Thin Crust",
    size:"large",
    cost: 14.99,
    delivery: false
};
const order3 = {
    pizzaID: "p3",
    customerID:"c1",
    addtopping1: "",
    style:"Deep Dish",
    size:"XL",
    cost: 19.99,
    delivery: true
};

/******* CREATE
 ********************************************************** */ 
// Inserts Pizzas
const insertPizza = async thisItem => {
    const result = await collection1.insertOne(thisItem);
    console.log("Pizza added:", thisItem);
} 
// Inserts Customers
const insertCustomers = async thisItem => {
    const result = await collection2.insertOne(thisItem);
    console.log("Customer added:", thisItem);
} 
// Inserts Orders
const insertOrders = async thisItem => {
    const result = await collection3.insertOne(thisItem);
    console.log("Order submitted:", thisItem);
} 

/**** READ
 *********************************************************** */
// const getListing = async (queryParam, queryLimit) => {
//     const result = await collection1.find(queryParam).limit(queryLimit).toArray();
//     console.table(result);
// }
// const getListing1 = async (queryParam, queryLimit) => {
//     const result = await collection2.find(queryParam).limit(queryLimit).toArray();
//     console.table(result);
// }
// const getListing2 = async (queryParam, queryLimit) => {
//     const result = await collection3.find(queryParam).limit(queryLimit).toArray();
//     console.table(result);
// }




const allCollections = [collection1, collection2, collection3];

const getAll = async (allCollections, queryParam) => {
    for (let i = 0; i < allCollections.length; i++){
        const result = await allCollections[i].find(queryParam).toArray();
        console.table(result);
    }
}




// await insertPizza(pizza3);
// await insertCustomers(customer2);
// await insertOrders(order3)

// await getListing({},0);
// await getListing1({},0);
// await getListing2({},0);

await getAll(allCollections, {})

client.close();
