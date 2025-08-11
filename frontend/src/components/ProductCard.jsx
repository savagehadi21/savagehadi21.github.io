import React from 'react';

export default function ProductCard({item, onAdd}){
  return (
    <article className="product-card">
      <div className="product-img">
        {item.image ? (
          <img src={item.image} alt={item.title} style={{width:'100%',height:'100%',objectFit:'cover'}} loading="lazy" />
        ) : (
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="88" height="88" role="img" aria-label="burger">
            <ellipse cx="100" cy="42" rx="72" ry="20" fill="#e0a87d"/>
            <rect x="28" y="50" width="144" height="28" rx="14" fill="#f7d2a1"/>
            <path d="M30 80 q70 34 140 0" fill="#b23e22"/>
            <rect x="36" y="96" width="128" height="12" rx="6" fill="#f5f5f5"/>
            <rect x="36" y="110" width="128" height="16" rx="8" fill="#d3f36b"/>
          </svg>
        )}
      </div>

      <div className="product-meta">
        <h3>{item.title}</h3>
        <div className="desc">{item.desc}</div>

        <div style={{display:'flex', gap:8, alignItems:'center', justifyContent:'space-between'}}>
          <div style={{display:'flex',alignItems:'center'}}>
            <div className="price-now">¥{Number(item.price).toFixed(2)}</div>
            <div className="old-price">¥{Number(item.old).toFixed(2)}</div>
            <div className="tag">{item.tag}</div>
          </div>

          <div>
            <button onClick={() => onAdd(item)} style={{background:'#fff',border:'1px solid #eee',padding:'6px 10px',borderRadius:8,cursor:'pointer'}}>＋</button>
          </div>
        </div>
      </div>
    </article>
  )
}
