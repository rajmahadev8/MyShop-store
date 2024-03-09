import getBillboard from '@/actions/get-billboards';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container'

export const revalidate = 0;

export default async function HomePage() {
  
  const products = await getProducts({isFeatured:true});
  
  const billboard = await getBillboard("d6824bae-e772-478b-a795-5bc88e752263")
  
  return (
   <Container className="">
      <div className='space-y-10 pb-10'>
          <Billboard data={billboard}/>
        <div className="flex flex-col gap-y-4 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products}/>
        </div>
        
      </div>
   </Container>

  )
}
