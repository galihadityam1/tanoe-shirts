import db from "../config";


const productCollection = db.collection("tanoe")


export async function GetAllProducts(category: string | null) {
    if(!category) {
        return await productCollection.find().toArray()
    }
    
    return await productCollection.find({category: category}).toArray() 
}

export async function GetDetailProduct() {

}

export async function GetPerCategory() {
    const agg = [
        {
            '$match': {
                'category': 'flannel'
            }
        }
    ];
    const cursor = productCollection.aggregate(agg);
    const result = await cursor.toArray();
    console.log(result);
    
}
