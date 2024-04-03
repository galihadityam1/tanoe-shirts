import db from "../config";


const productCollection = db.collection("tanoe")


export async function GetAllProducts() {
    return await productCollection.find().toArray()
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