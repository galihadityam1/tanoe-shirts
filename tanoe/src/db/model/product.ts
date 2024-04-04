import db from "../config";


const productCollection = db.collection("tanoe")


export async function GetAllProducts(category: string | null, name: string | null, disc: string | null, sleeve: string | null, createdAt: string | null, page: string | null) {
    let res = Number(page)

    let sort = 0
    let perPage = 12
    let pageNumber = res
    let skip = (pageNumber - 1) * perPage

    if (category) {
        return await productCollection.find({ category: category }).toArray()
    }

    if (sleeve) {
        return await productCollection.find({ sleeve: sleeve }).toArray()
    }

    if (name) {
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

    if (createdAt) {
        if (createdAt === 'old') {
            sort = 1
        }

        if (createdAt === 'new') {
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

    if (disc) {

        if (disc === 'high') {
            sort = 1
        }

        if (disc === 'low') {
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

    const agg = [
        {
            '$group': {
                '_id': null,
                'total': {
                    '$sum': 1
                },
                'results': {
                    '$push': '$$ROOT'
                }
            }
        }, {
            '$addFields': {
                'totalPages': {
                    '$ceil': {
                        '$divide': [
                            '$total', perPage
                        ]
                    }
                },
                'currentPage': 1
            }
        }, {
            '$project': {
                'total': 1,
                'totalPages': 1,
                'currentPage': 1,
                'results': {
                    '$slice': [
                        '$results', skip, perPage
                    ]
                }
            }
        }
    ];
    const cursor = productCollection.aggregate(agg)
    const result = await cursor.toArray()
    //   console.log(result);

    return result

    return await productCollection.find().toArray()
}

export async function GetDetailProduct(slug: string) {
    return await productCollection.findOne({ slug: slug })
}

export async function GetDataHome() {
    const agg = [
        {
            '$limit': 5
        }
    ];

    const cursor = productCollection.aggregate(agg);
    const result = await cursor.toArray();

    return result
}