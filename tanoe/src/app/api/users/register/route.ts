import { GetUserByEmail, UserRegister } from "@/db/model/users";
import { log } from "console";
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

        log('sebelum')
        let data = await UserRegister(body.email, body.password, body.username)
        log('sesudah')

        return NextResponse.json({
            message: 'Success'
        },
        {
            status: 201
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error: "Internal Server Error"
        },
        {
            status: 500
        })
        
    }
    
}