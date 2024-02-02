"use client"
import {Reviews} from '@/types';
import axios from 'axios';
import toast from 'react-hot-toast';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/review`;
interface data {
    name:string,
    review:string,
}
const postReviews = async(data:data, productid:string) => {
    const body = {
        "name":data.name,
        "description":data.review,
        "productid":productid,
    }
try{    
    const res = await fetch(`${URL}`,{
        method:'POST',
        mode:'no-cors',
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Access-Control-Allow-Headers':'X-Requested-With,content-type',
            'Access-Control-Allow-Credentials':'true'
        },
        body:JSON.stringify(body)
    })
    toast("Review added");
}catch{
    toast("UNSUCCESSFULL")
}
    
}


export default postReviews;