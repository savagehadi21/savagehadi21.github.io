import React from 'react';

export default function Categories({categories, active, onSelect}){
  return (
    <aside className="categories" aria-label="Categories">
      {categories.map(cat => (
        <button
          key={cat.id}
          className={'cat-btn' + (active === cat.id ? ' active' : '')}
          onClick={() => onSelect(cat.id)}
        >
          <span className="cat-emoji">{cat.emoji}</span>
          <span className="cat-name">{cat.name}</span>
        </button>
      ))}
    </aside>
  )
}
