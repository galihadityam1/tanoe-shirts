export type Product = {
    _id: string,
    name: string,
    slug: string,
    category: string,
    sleeve: string,
    image: string,
    price: number,
    disc: number,
    description: string,
    excerpt: string,
    tags: string[],
    stok: number,
    createdAt: Date,
    updatedAt: Date
}

export type input = {
    email: string,
    password: string
}