"use server"
import { BASE_URL } from "@/db/config/constant";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showToast } from "./toast";


export async function logout() {
    cookies().delete("Authorization");
    redirect("/login")
}

export async function submitAction(formData: FormData) {
    const email = formData.get('email')
    const password = formData.get('password')
    // console.log(email, password);
    // if (!email) {
    //     return Swal.fire({
    //         title: 'email required',
    //         showConfirmButton: false,
    //         timer: 1500,
    //         icon: 'warning'
    //     })
    // }
    // if (!password) {
    //     return Swal.fire({
    //         title: 'password required',
    //         showConfirmButton: false,
    //         timer: 1500,
    //         icon: 'warning'
    //     })
    // }


    let res = await fetch(`${BASE_URL}/api/users/login`, {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const result = await res.json()
    // console.log(res.ok);
    

    if (!res.ok) {
        return redirect('/login' + `?error=${result.error}`)
    }

    cookies().set("Authorization", `Bearer ${result.data.token}`)
    return redirect('/')
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

    // console.log(result.data);
    return result.data[0]
}

export async function addCart(formData: FormData) {
    // console.log('masuk');
    
    const objectId = formData.get("id")
    let res = await fetch(`${BASE_URL}/api/wishlist`, {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify({objectId}),
        headers: {
            "Content-type": "application/json",
            Cookie: cookies().toString()
        }
    })

    let result = await res.json()
    // console.log(result);

    if (!res.ok) {
        return redirect('/')
    }
    
    // console.log(result, 'ini di action');
    if(!result.data.wishlit){
        // console.log('masuk');
        
        return
    }
    
    return
}