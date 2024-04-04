import { GetDetailProduct } from "@/db/model/product";

export async function GET(
    request: Request,
    {params}: {params: {slug: string}}) {
        console.log(params, 'ini di route api');
        
    let data = await GetDetailProduct()
    console.log(data);
    
}