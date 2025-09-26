import React from 'react'

export default function FilterSort({ categories, category, setCategory, sort, setSort }) {
  return (
    <div className="filter-sort">
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
        <option value="rating-desc">Rating: High → Low</option>
      </select>
    </div>
  )
}
