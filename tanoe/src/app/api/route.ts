import { GetDataHome } from "@/db/model/product";
import { NextResponse } from "next/server";

export async function GET() {
    let data = await GetDataHome()
    return NextResponse.json({
        status: 200,
        data
    })
}