"use client"
import { BASE_URL } from "@/db/config/constant"
import Swal from "sweetalert2"

export const addWishlist = async (formData: FormData) => {
    const id = formData.get("id")
    const res = await fetch(`${BASE_URL}/api/wishlist`, {
        method: 'POST',
        cache: 'no-store',
        mode: 'no-cors',
        headers: {
            "Content-type": "application/json",
            Cookie: document.cookie
        },
        body: JSON.stringify({ id })
    })

    const result = await res.json()
    // console.log(result.errMessage);

    if (result.errMessage) {
        return Swal.fire({
            title: result.errMessage,
            showConfirmButton: false,
            timer: 1500,
            icon: 'warning'
        })
    }
    // console.log(res.ok);
    if (!res.ok) {
        return Swal.fire({
            title: 'res.ok',
            showConfirmButton: false,
            timer: 1500,
            icon: 'warning'
        })
    }


    return Swal.fire({
        title: 'Wishlist added',
        showConfirmButton: false,
        timer: 1500,
        icon: 'success'
    })
}