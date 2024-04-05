import { ObjectId } from "mongodb";
import db from "../config";
import { NextResponse } from "next/server";


const wishlistCollection = db.collection("wishlist")

export async function AddWishList(objectId: ObjectId, userId: ObjectId){
    let result = await wishlistCollection.insertOne({objectId, userId})
    return result

}

