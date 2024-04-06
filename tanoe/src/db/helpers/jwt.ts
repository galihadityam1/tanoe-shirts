import jwt, { JwtPayload } from 'jsonwebtoken'
import * as jose from "jose"

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET || ""

export const createToken = (payload: JwtPayload) => {
    return jwt.sign(payload, SECRET_KEY)
}

export const readPayload = (token: string) => jwt.verify(token, SECRET_KEY)

export const readPayloadJose = async <T>(token: string) => {
    // console.log(token, SECRET_KEY, '<<< di page jwt');
    const secret = new TextEncoder().encode(SECRET_KEY)
    const result = await jose.jwtVerify<T>(token, secret)
    return result.payload
}