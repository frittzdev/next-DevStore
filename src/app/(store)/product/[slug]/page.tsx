import { AddToCartButton } from '@/components/add-to-cart-button'
import { ProductProps } from '@/data/types/products-props'
import { getFeatureProducts } from '@/http/get-featured-products'
import { getProductDetails } from '@/http/get-product-details'
import { Metadata } from 'next'
import Image from 'next/image'

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProductDetails(params.slug)

  return {
    title: product.title,
  }
}

export async function generateStaticParams() {
  const products = await getFeatureProducts()

  return products.map((product) => {
    return { slug: product.slug }
  })
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProductDetails(params.slug)

  return (
    <div className="relative grid max-h-[856px] grid-cols-3">
      {product && (
        <>
          <div className="col-span-2 overflow-hidden">
            <Image
              src={product.image}
              alt=""
              width={1000}
              height={1000}
              quality={100}
            />
          </div>

          <div className="flex flex-col justify-center px-12">
            <h1 className="text-3xl font-bold leading-tight">
              {product.title}
            </h1>
            <p className="mt-2 leading-relaxed text-zinc-400">
              {product.description}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
              <span className="text-sm text-zinc-400">
                Em 12x s/ juros de R${product.price / 12}
              </span>
            </div>

            <div className="mt-8 space-y-4">
              <span className="block font-semibold">Tamanhos</span>

              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold hover:bg-zinc-700"
                >
                  P
                </button>
                <button
                  type="button"
                  className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold hover:bg-zinc-700"
                >
                  M
                </button>
                <button
                  type="button"
                  className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold hover:bg-zinc-700"
                >
                  G
                </button>
                <button
                  type="button"
                  className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold hover:bg-zinc-700"
                >
                  GG
                </button>
              </div>
            </div>

            <AddToCartButton productId={product.id} />
          </div>
        </>
      )}
    </div>
  )
}
