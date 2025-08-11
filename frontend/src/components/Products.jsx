import React from 'react';
import ProductCard from './ProductCard';

export default function Products({items, onAdd, promo}){
  return (
    <main className="products" aria-live="polite">
      <div className="promo">
        <img src={promo?.image || 'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\"><rect rx=\"12\" width=\"120\" height=\"120\" fill=\"%23ef5350\"/><text x=\"50%\" y=\"50%\" fill=\"white\" font-size=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\">COKE</text></svg>'} alt="promo" style={{width:74,height:74,objectFit:'cover',borderRadius:10}} loading="lazy" />
        <div className="p-info">
          <div style={{fontWeight:800}}>{promo?.title}</div>
          <div style={{color:'#9aa3ad',fontSize:12,marginTop:6}}>{promo?.subtitle} · {promo?.price}</div>
        </div>
      </div>

      {items.map(it => <ProductCard key={it.id} item={it} onAdd={onAdd} />)}
    </main>
  )
}
