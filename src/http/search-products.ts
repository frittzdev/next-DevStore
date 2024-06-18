import { api } from '@/data/api'
import { Product } from '@/data/types/products'

export async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const products = response.json()

  return products
}
