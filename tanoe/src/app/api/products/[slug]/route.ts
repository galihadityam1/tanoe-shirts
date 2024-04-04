import { GetDetailProduct } from "@/db/model/product";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    {params}: {params: {slug: string}}) {
        const {slug} = params        
        
    let data = await GetDetailProduct(slug)
    return NextResponse.json({
        status: 200,
        data
    })
}