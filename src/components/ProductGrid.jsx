import React from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ products, onAddToCart }) {
  if (!products.length) return <p className="empty">No products found — try changing search or filters.</p>

  return (
    <section className="grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
      ))}
    </section>
  )
}
