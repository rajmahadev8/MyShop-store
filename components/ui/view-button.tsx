"use client";
import { cn } from "@/lib/utils"
import { SplitSquareHorizontal } from 'lucide-react';
import { MouseEventHandler } from "react";
import Button from '@/components/ui/button';
import { useRouter } from "next/navigation";

interface IconButtonProps{
    // onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    // icon: React.ReactElement;
    // className?: string;
    id:string
}

const ViewButton:React.FC<IconButtonProps> =({id})=>{
    const router = useRouter()
    const onClick3dView:MouseEventHandler<HTMLButtonElement> = (event)=>{
        router.push(`/shoesView/${id}`);
    }
    return(
        <Button className="flex justify-center items-center gap-x-2 border-none rounded-md w-full" onClick={onClick3dView}>
        Customize your own shoes
        <SplitSquareHorizontal/>
        </Button>
    )
}
export default ViewButton;