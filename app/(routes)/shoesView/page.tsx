'use client'
import Container from "@/components/ui/container"
import ShoesView from "@/components/3dView/ShoesView"

interface ShoesViewPage{
    
}
export const revalidate = 0;
const ShoesPage:React.FC<ShoesViewPage>=()=>{
    
    return (
        <div className="bg-white">
            <Container className="h-[90vh]">
                <ShoesView/>
            </Container>
        </div>
    )
    
}
export default ShoesPage;