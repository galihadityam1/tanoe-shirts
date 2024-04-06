import { ObjectId } from "mongodb";
import db from "../config";
import { NextResponse } from "next/server";


const wishlistCollection = db.collection("wishlist")

export async function AddWishList(objectId: ObjectId, userId: ObjectId){
    let find = await wishlistCollection.findOne({objectId, userId})
    if(find){
        console.log('masuk validasi');
        
        return find
    }

    let result = await wishlistCollection.insertOne({objectId, userId})
    return result

}

export async function FindWishlist(objectId: ObjectId, userId: ObjectId){
    console.log('masuk sini');
    
    let find = await wishlistCollection.findOne({objectId, userId})

    if(find){
        return find
    }

    return null
}
