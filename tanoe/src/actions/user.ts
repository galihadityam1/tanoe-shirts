"use server"
import { BASE_URL } from "@/db/config/constant";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
    cookies().delete("Authorization");
    redirect("/")
}

export async function postLogin() {
    console.log('masuk login');

}

export const fetchWishList = async () => {
    let res = await fetch(`${BASE_URL}/api/wishlist`, {
        cache: 'no-store',
        headers: {
            Cookie: cookies().toString()
        }
    })

    const result = await res.json()

    if (result.errMessage === "Invalid Login") {
        redirect('/login')
    }

    console.log(result);
}