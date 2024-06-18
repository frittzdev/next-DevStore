'use client'

import { useCart } from '@/contexts/cart-context'

export interface AddToCartProps {
  productId: number
}

export function AddToCartButton({ productId }: AddToCartProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      onClick={handleAddProductToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white hover:bg-emerald-500"
    >
      Adicionar ao carrinho
    </button>
  )
}
