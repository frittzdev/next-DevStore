import { getFeatureProducts } from '@/http/get-featured-products'
import Image from 'next/image'
import Link from 'next/link'

export default async function Store() {
  const [highligthProduct, ...otherProducts] = await getFeatureProducts()

  return (
    <div className="grid-row-6 grid max-h-[856px] grid-cols-9 gap-6">
      {highligthProduct && (
        <Link
          href={`/product/${highligthProduct.slug}`}
          className="roudned-lg group relative col-span-6 row-span-6 flex items-end justify-center overflow-hidden bg-zinc-900"
        >
          <Image
            src={highligthProduct.image}
            className="transition-transform duration-500 group-hover:scale-105"
            width={860}
            height={860}
            quality={100}
            alt=""
          />

          <div className="absolute bottom-28 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="truncate text-sm">{highligthProduct.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {highligthProduct.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      )}

      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="roudned-lg group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden bg-zinc-900"
          >
            <Image
              src={product.image}
              className="transition-transform duration-500 group-hover:scale-105"
              width={860}
              height={860}
              quality={100}
              alt=""
            />

            <div className="absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="truncate text-sm">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
