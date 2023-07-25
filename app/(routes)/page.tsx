import getBillboard from '@/actions/get-billboards';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container'
export const revalidate = 0;

export default async function HomePage() {
  const products = await getProducts({isFeatured:true});
  const billboard = await getBillboard("efb4e107-83ca-455b-b11c-220637e1a879")
  return (
   <Container>
      <div className='space-y-10 pb-10'>
          <Billboard data={billboard}/>
        <div className="flex flex-col gap-y-4 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products}/>
        </div>
      </div>
   </Container>

  )
}
