import { GetUserByEmail } from "@/db/model/users";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const user = await GetUserByEmail(body.email)

        if(user){
            return NextResponse.json({
                errMessage: 'Email already registered'
            },
            {
                status: 400
            })
        }

        

        return
    } catch (error) {
        console.log(error);
        
    }
    
}