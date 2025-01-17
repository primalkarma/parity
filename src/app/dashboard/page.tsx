import { getProducts } from '@/server/db/products'
import { auth } from '@clerk/nextjs/server'
import NoProducts from './_components/NoProducts'


const DashboardPage = async () => {

  const { userId, redirectToSignIn } = await auth()
  if (userId == null) return redirectToSignIn
  const products  = await getProducts(userId, {limit: 5})

  if (products.length === 0) return <NoProducts />
  return (
    null
  )
}

export default DashboardPage