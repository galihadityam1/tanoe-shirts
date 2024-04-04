import { GetAllProducts } from "@/db/model/product";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    
    const category = searchParams.get('category')
    const name = searchParams.get('name')
    const disc = searchParams.get('disc')
    const sleeve = searchParams.get('sleeve')
    const createdAt = searchParams.get('createdAt')
    const page = searchParams.get('page')
        
    let data = await GetAllProducts(category, name, disc, sleeve, createdAt, page)
    return NextResponse.json({
        status: 200,
        data
    })
}