import { GetDetailProduct } from "@/db/model/product";

export async function GET({}) {
    let data = await GetDetailProduct()
    console.log(data);
    
}