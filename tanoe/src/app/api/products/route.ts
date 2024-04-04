import { GetAllProducts } from "@/db/model/product";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    
    const category = searchParams.get('category')
    
    let data = await GetAllProducts(category)
    return NextResponse.json({
        status: 200,
        data
    })
}