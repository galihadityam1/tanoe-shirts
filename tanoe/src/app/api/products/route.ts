import { GetAllProducts } from "@/db/model/product";
import { NextResponse } from "next/server";

export async function GET() {
    let data = await GetAllProducts()
    return NextResponse.json({
        status: 200,
        data
    })
}