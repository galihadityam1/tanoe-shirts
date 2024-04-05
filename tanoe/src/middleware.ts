import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { readPayload, readPayloadJose } from './db/helpers/jwt';
import { ObjectId } from 'mongodb';
import { payload } from './Types';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    let user = cookies().get("Authorization")
    console.log(user, '<<<<<<');
    if (!user) {
        return NextResponse.json({
            errMessage: "Invalid Login"
        },
            {
                status: 401
            })
    } 

    const { value } = user
    
    const token = value.split(" ")[1]
    // Given an incoming request...
    const newHeaders = new Headers(request.headers)

    const result: payload = await readPayloadJose(token)
    // console.log(result, '<<< ini result');
    
    // Add a new header
    newHeaders.set('x-user-id', result._id)
    newHeaders.set('x-user-email', result.email)
    // And produce a response with the new headers
    return NextResponse.next({
      request: {
        // New request headers
        headers: newHeaders,
      },
    })
    // const newHeaders = 
    // let token = user.split(" ")
    // return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/api/wishlist',
}