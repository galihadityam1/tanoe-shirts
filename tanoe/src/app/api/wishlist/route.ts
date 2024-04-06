import { GetWishlist } from "@/db/model/users";
import { AddWishList, DeleteWishlist, FindWishlist } from "@/db/model/wishlist";
import { ObjectId } from "mongodb";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    // let id = cookies().get("Authorization")
    let _id = headers().get('x-user-id')
    let id = new ObjectId(String(_id))
    // console.log(id, '<<<< ini harsunya id');

    let data = await GetWishlist(id)
    return NextResponse.json({ data }, {
        status: 200,
    })
}

export async function POST(request: Request) {
    const body = await request.json()
    if (body.objectId) {
        let objectId = new ObjectId(String(body.objectId))
        let id = headers().get('x-user-id')
        if (!id) {
            return NextResponse.json({
                errMessage: 'Belum Login'
            },
                {
                    status: 400
                })
        }

        let userId = new ObjectId(String(id))
        const find = await FindWishlist(objectId, userId)
        console.log(find);

        if (find) {
            return NextResponse.json({
                errMessage: 'Baju sudah Masuk WishList'
            },
                {
                    status: 400
                })
        }
        const wishlist = await AddWishList(objectId, userId)
        return NextResponse.json({
            data: { wishlist }
        })

    }

    let id = headers().get('x-user-id')
    if (!id) {
        return NextResponse.json({
            errMessage: 'Belum Login'
        },
            {
                status: 400
            })
    }
    let objectId = new ObjectId(String(body.id))
    let userId = new ObjectId(String(id))
    const find = await FindWishlist(objectId, userId)
    if (find) {
        return NextResponse.json({
            errMessage: 'Baju sudah Masuk WishList'
        },
            {
                status: 400
            })
    }
    const wishlist = await AddWishList(objectId, userId)
    return NextResponse.json({
        data: { wishlist }
    },
        {
            status: 201
        })


}

export async function DELETE(request: Request) {
    const body = await request.json()
    // console.log(body.id);
    let id = headers().get('x-user-id')
    if (!id) {
        return NextResponse.json({
            errMessage: 'Belum Login'
        },
            {
                status: 400
            })
    }
    let objectId = new ObjectId(String(body.id))
    let userId = new ObjectId(String(id))
    const find = await FindWishlist(objectId, userId)
    if (!find) {
        return NextResponse.json({
            errMessage: 'There is no wishlist like that'
        },
            {
                status: 400
            })
    }

    const del = await DeleteWishlist(objectId)
    return NextResponse.json({
        data: del
    },
    {
        status: 200
    })
}