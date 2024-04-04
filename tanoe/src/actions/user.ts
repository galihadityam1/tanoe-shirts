"use server"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
    cookies().delete("Authorization");
    redirect("/")
}

export async function postLogin() {
    console.log('masuk login');
    
}