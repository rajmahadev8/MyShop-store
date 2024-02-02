"use client";
import { Product, Reviews } from "@/types"
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { MouseEventHandler, useState } from "react";
import useCart from "@/hooks/use-cart";
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from 'zod';

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { toast } from "react-hot-toast";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";
import { FormField } from "./ui/form";
import postReviews from "@/actions/post-reviews";
import axios from "axios";
interface ReviewProps {
    reviews: Reviews[],
    productid:string
    
}

const Review: React.FC<ReviewProps> = ({ productid,reviews }) => {
    const formSchema = z.object({
        name:z.string().min(1),
        review:z.string().min(1),
    });
    const [loading, setLoading] = useState(false);
    

    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            name:"",
            review:""
        },
    });
    const onSubmit=async(data: z.infer<typeof formSchema>)=>{
       
        try{
            postReviews(data,productid);            
        }catch(error){
            console.log(error);
            toast.error("Something went wrong");
        }finally{
            setLoading(false);
        }
    }
    return (
        <div>
            
            <Card >
                <div className="flex">

                <CardHeader>
                    <CardTitle>Review</CardTitle>
                    <CardDescription>Submit your review here.</CardDescription>
                </CardHeader>
                </div>
                <CardContent>
                <ResizablePanelGroup direction="horizontal" className="min-h-[200px] sm:min-h-[100px] rounded-lg ">
                    <ResizablePanel defaultSize={40} >
                    
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                    
                        <div className="grid w-full items-center gap-4">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <div className="flex flex-col space-y-1.5"> 
                                <Input id="name" placeholder="Name" {...field}  />
                            </div>
                            )}
                            />
                             <FormField
                                control={form.control}
                                name="review"
                                render={({ field }) => (
                                    <div className="flex flex-col space-y-1.5">
                                        <Textarea className="min-h-[200px]"  placeholder="Drop your review...." {...field}/>
                                    </div>
                            )}
                            />
                        </div>
                        
                        
                        <Button type="submit" className="w-full mt-3">
                            Submit
                        </Button>
                        
                    </form>
                    </ResizablePanel>
                    
                    <ResizableHandle />
                    <ResizablePanel defaultSize={60}>
                        
                    <ScrollArea className="h-72  rounded-md ">
                    <div className="flex flex-col pb-4 pl-4 pr-4">
                    {reviews?reviews.map((review) => (
                        <Card className="mb-2">
                            <CardContent>
                    <div key={review.name || 0} className="shrink-0 m-3">
                        <div className="rounded-md">
                        {review.description}
                        </div>
                        <figcaption className="pt-2 text-xs text-muted-foreground">
                         by{" "}
                        <span className="font-semibold text-foreground">
                            {review.name}
                        </span>
                        </figcaption>
                        </div>
                        </CardContent>
                        </Card>
                        )):<div className="font-semibold">
                            No reviews yet</div>
                        }
                    </div>
                    <ScrollBar orientation="vertical" />

                        </ScrollArea>

                    </ResizablePanel>
                    
                </ResizablePanelGroup>
                    
                </CardContent>
               
            </Card>
            
        </div>
    )
}

export default Review