import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        /* const user = await GetUserByEmail(body.email)

        if(!user){
            return NextResponse.json(
                {
                    error: "wrong email/password"
                },
                {
                    status: 401
                }
            )
        }

        const isValid = compareTextWithHash(body.password, user.password)

        if(!isValid){
            return NextResponse.json(
                {
                    error: "Wrong email/password"
                },
                {
                    status: 401
                }
            )
        }

        const token = createToken({ _id: user._id, email: user.email });

        cookies().set("Authorization", `Bearer ${token}`)

        return NextResponse.json({
            data: {token}
        })

        */
    } catch (error) {
        console.log(error);
        if (error instanceof ZodError) {
            const errMessage =
                error.errors[0].path[0] + " " + error.errors[0].message
            return NextResponse.json(
                {
                    error: errMessage
                },
                {
                    status: 400
                }
            )
        }

    }

    return NextResponse.json(
        {
            error: "Internal server Error"
        },
        {
            status: 500
        }
    )
}