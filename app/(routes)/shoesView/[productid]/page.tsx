'use client'
import Container from "@/components/ui/container"
import ShoesView from "@/components/3dView/ShoesView"
import getProduct from "@/actions/get-product"
import Button from "@/components/ui/button"
import axios from "axios"

interface ShoesViewPage{
    params:{
        productid:string
    }
}
export const revalidate = 0;

const ShoesPage:React.FC<ShoesViewPage>=async({params})=>{
    const items = [params.productid]
    const onCheckout = async()=>{
        // const body = {
        //     productIds: productIds,
        // }
        // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`,{
        //     method:'POST',
        //     // mode:'no-cors',
        //     // headers:{
        //     //     'Access-Control-Allow-Origin': '*',
        //     //     'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        //     //     'Access-Control-Allow-Headers':'X-Requested-With,content-type',
        //     //     'Access-Control-Allow-Credentials':'true'
        //     // },
        //     body:JSON.stringify(body)
        // })
        // const url = JSON.stringify(res.url)
        // window.location.href = url;
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`,{
            productIds: items,
        });
        window.location = res.data.url;
    }
   
    return (
        <div className="bg-white">
            <Container className="h-[90vh]">
                <ShoesView />
                <Button  onClick={onCheckout} className=" relative w-full mt-6">Checkout</Button>
            </Container>
        </div>
    )
    
}
export default ShoesPage;