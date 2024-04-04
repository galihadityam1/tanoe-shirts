import db from "../config";


const productCollection = db.collection("tanoe")


export async function GetAllProducts(category: string | null, name: string | null) {
    if(category) {
        return await productCollection.find({category: category}).toArray() 
    }
    
    if(name){
        // console.log(name);
        
        const agg = [
            {
              '$match': {
                'name': {
                  '$regex': name, 
                  '$options': 'i'
                }
              }
            }
          ];

          const cursor = productCollection.aggregate(agg);
          const result = await cursor.toArray();
          
        return result
    }
    
    return await productCollection.find().toArray()
}

export async function GetDetailProduct(slug: string) {
    return await productCollection.findOne({slug: slug})
}
