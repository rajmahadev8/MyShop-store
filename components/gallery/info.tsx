"use client";
import { Product } from "@/types"
import Currency from "../ui/currency";
import Button from "../ui/button";
import { ShoppingCart,SplitSquareHorizontal } from "lucide-react";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface InfoProps {
    data:Product;
}

const Info: React.FC<InfoProps> = ({data}) => {
    const router = useRouter();
    const cart = useCart();
    const onAddToCart:MouseEventHandler<HTMLButtonElement> = (event)=>{
        event.stopPropagation();
        cart.addItem(data)
    }
    const onClick3dView:MouseEventHandler<HTMLButtonElement> = (event)=>{
        router.push(`/shoesView`);

    }
  return(
    <div>
        <h1 className="text-3xl font-bold text-gray-900">
            {data.name}
        </h1>
        <div className="mt-3 items-end justify-between">
            <p className="text-2xl text-gray-900">
                <Currency value={data?.price}/>
            </p>
        </div>
        <hr className="my-4"/>
        <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">Size:</h3>
                <div>
                    {data?.size?.name}
                </div>
            </div>
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">Color:</h3>
                <div className="h-6 w-6 rounded-full border border-gray-600" 
                    style={{backgroundColor: data?.color?.value}}
                    />
            </div>
        </div>
        {/* <div className="mt-10 flex items-center gap-x-3">
            <Button className="flex items-center gap-x-2 border-none" onClick={onClick3dView}>
                    3d view 
                    <SplitSquareHorizontal/>
            </Button>
        </div> */}
        <div className="mt-3 flex items-center gap-x-3">
            <Button className="flex items-center gap-x-2" onClick={onAddToCart}>
                Add to cart
                <ShoppingCart/> 
            </Button>
            
        </div>
           
    </div>
  )
}

export default Info