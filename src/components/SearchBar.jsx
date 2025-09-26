import React from 'react'

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="searchbar">
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search products..."
        aria-label="Search products"
      />
    </div>
  )
}
