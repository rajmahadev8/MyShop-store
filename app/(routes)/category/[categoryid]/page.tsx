
import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-result";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filter";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";


export const revalidate = 0

interface CategoryProps{
    params:{
        categoryid:string;
    },
    searchParams:{
        colorid:string;
        sizeid:string;
    }
}

const CategoryPage:React.FC<CategoryProps> = async ({params,searchParams})=>{
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //   setTimeout(()=>{
    //     setLoading(false)
    //   },40000)
    // }, [])
    
    const products = await getProducts({
        categoryid:params.categoryid,
        sizeid:searchParams.sizeid,
        colorid:searchParams.colorid,   
    })
    const sizes = await getSizes();
    const colors = await getColors();
    const category = await getCategory(params.categoryid);

    return(
        <div className="bg-white">
            <Container className="">
                <Suspense fallback={<Loading/>}>
                <Billboard 
                    data={category.billboard}
                />
                </Suspense>
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters sizes={sizes} colors={colors}/>
                        <div className="hidden lg:block">
                            <Filter 
                                value="sizeid"
                                name="Sizes"
                                data={sizes}
                            />
                             <Filter 
                                value="colorid"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-8">
                            {products.length===0 && <NoResults/>}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((item)=>(
                                    <ProductCard key={item.id} data={item}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default CategoryPage;