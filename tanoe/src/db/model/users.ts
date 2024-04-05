import { ObjectId } from "mongodb";
import db from "../config";


const userCollection = db.collection("users")

export async function GetUserByEmail(email: string | null){
    let data = await userCollection.findOne({email})

    return data
}

export async function GetWishlist(id: ObjectId | null){
    const agg = [
        {
          '$match': {
            '_id': id
          }
        }, {
          '$project': {
            'password': 0
          }
        }, {
          '$lookup': {
            'from': 'wishlist', 
            'localField': '_id', 
            'foreignField': 'userId', 
            'as': 'wishlist'
          }
        }, {
          '$lookup': {
            'from': 'tanoe', 
            'localField': 'wishlist.objectId', 
            'foreignField': '_id', 
            'as': 'detail'
          }
        }
      ];
      
      const cursor = userCollection.aggregate(agg);
      const result = await cursor.toArray();
       return result
}