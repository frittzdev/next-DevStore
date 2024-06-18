import { api } from '@/data/api'
import { Product } from '@/data/types/products'

export async function getProductDetails(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`)

  const product = response.json()

  return product
}
