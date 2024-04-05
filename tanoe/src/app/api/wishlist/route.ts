import { GetWishlist } from "@/db/model/users";
import { ObjectId } from "mongodb";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(){
    // let id = cookies().get("Authorization")
    let _id = headers().get('x-user-id')
    let id = new ObjectId(String(_id))
    // console.log(id, '<<<< ini harsunya id');
    
    let data = await GetWishlist(id)
    return NextResponse.json({data},{
        status: 200,
    })
}