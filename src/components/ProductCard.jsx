import React from 'react'

export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="card">
      <div className="card-media">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <div className="meta">
          <span className="price">₹{product.price}</span>
          <span className="category">{product.category}</span>
        </div>
        <div className="rating">{'★'.repeat(Math.round(product.rating))} <small>({product.rating})</small></div>
        <button className="btn" onClick={() => onAddToCart(product)}>Add to cart</button>
      </div>
    </article>
  )
}
