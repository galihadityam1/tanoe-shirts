import { GetAllProducts } from "@/db/model/product";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    
    const category = searchParams.get('category')
    const name = searchParams.get('name')
    
    let data = await GetAllProducts(category, name)
    return NextResponse.json({
        status: 200,
        data
    })
}