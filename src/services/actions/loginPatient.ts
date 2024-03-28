'use server';

import { FieldValues } from "react-hook-form";

export const loginPatient = async(data: FieldValues)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store",
    });
    const loginInfo = await res.json();
    return loginInfo;
}