import { ObjectId } from "mongodb";
import db from "../config";
import { NextResponse } from "next/server";


const wishlistCollection = db.collection("wishlist")


export async function FindWishlist(objectId: ObjectId, userId: ObjectId){
    console.log('masuk sini');
    
    let find = await wishlistCollection.findOne({objectId, userId})
    // console.log(find);
    
    if(find){
        return find
    }
    
    return null
}

export async function AddWishList(objectId: ObjectId, userId: ObjectId){
    let result = await wishlistCollection.insertOne({objectId, userId})

    return result
}
