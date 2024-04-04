import db from "../config";


const productCollection = db.collection("tanoe")


export async function GetAllProducts(category: string | null, name: string | null, disc: string | null, sleeve: string | null, createdAt: string | null) {
    let sort = 0

    if(category) {
        return await productCollection.find({category: category}).toArray() 
    }
        
    if(sleeve){
        return await productCollection.find({sleeve: sleeve}).toArray() 
    }
    
    if(name){    
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

    if(createdAt){
        if(createdAt === 'old') {
            sort = 1
        } 
        
        if(createdAt === 'new') {
            sort = -1
        }
        const agg = [
            {
              '$sort': {
                'createdAt': sort
              }
            }
          ];

          const cursor = productCollection.aggregate(agg)
          const result = await cursor.toArray()

          return result
    }

    if(disc){
        
        if(disc === 'high') {
            sort = 1
        } 
        
        if(disc === 'low') {
            sort = -1
        }
        const agg = [
            {
              '$sort': {
                'disc': sort
              }
            }
          ];

          const cursor = productCollection.aggregate(agg)
          const result = await cursor.toArray()

          return result
    }
    
    return await productCollection.find().toArray()
}

export async function GetDetailProduct(slug: string) {
    return await productCollection.findOne({slug: slug})
}
