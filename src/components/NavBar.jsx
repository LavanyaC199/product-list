import React from 'react'

export default function NavBar({ cartCount = 0 }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">Lavanya's Shop</div>
        <div className="nav-right">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#">Products</a>
          <button className="cart-btn" title="Cart">🛒 <span className="cart-count">{cartCount}</span></button>
        </div>
      </div>
    </nav>
  )
}
