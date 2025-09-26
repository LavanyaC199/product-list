import React, { useMemo, useState } from 'react'
import productsData from './data/products'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import FilterSort from './components/FilterSort'
import ProductGrid from './components/ProductGrid'

export default function App() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('')
  const [cart, setCart] = useState([])

  const categories = useMemo(() => {
    const set = new Set(productsData.map(p => p.category))
    return ['All', ...Array.from(set)]
  }, [])

  const filtered = useMemo(() => {
    let out = productsData.filter(p =>
      p.name.toLowerCase().includes(search.trim().toLowerCase())
    )
    if (category !== 'All') out = out.filter(p => p.category === category)

    if (sort === 'price-asc') out = out.sort((a,b) => a.price - b.price)
    if (sort === 'price-desc') out = out.sort((a,b) => b.price - a.price)
    if (sort === 'rating-desc') out = out.sort((a,b) => b.rating - a.rating)

    return out
  }, [search, category, sort])

  function handleAddToCart(product) {
    setCart(prev => [...prev, product])
    console.log('Added to cart:', product.name)
  }

  return (
    <div className="app-root">
      <NavBar cartCount={cart.length} />

      <header className="hero">
        <h1>Shop the best — clean responsive product grid</h1>
        <p className="subtitle">Search, filter by category and sort by price or rating.</p>
        <div className="controls">
          <SearchBar search={search} setSearch={setSearch} />
          <FilterSort
            categories={categories}
            category={category}
            setCategory={setCategory}
            sort={sort}
            setSort={setSort}
          />
        </div>
      </header>

      <main>
        <ProductGrid products={filtered} onAddToCart={handleAddToCart} />
      </main>

      <footer className="footer">Made with ❤️ by Lavanya— Product Listing Demo</footer>
    </div>
  )
}
