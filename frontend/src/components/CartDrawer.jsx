import React from 'react';

export default function CartDrawer({open, items, onClose, onChangeQty, onCheckout}){
  const total = items.reduce((s,i)=>s + i.price * i.qty, 0);
  return (
    <div style={{
      position:'fixed', right: open ? 12 : -420,
      bottom: 80, width:360, maxWidth:'90vw',
      background:'#fff', boxShadow:'0 20px 40px rgba(0,0,0,0.15)', borderRadius:12,
      transition:'right .28s', zIndex:60, padding:12
    }}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h3 style={{margin:0}}>购物车</h3>
        <button onClick={onClose} style={{background:'transparent',border:0,cursor:'pointer'}}>✕</button>
      </div>

      <div style={{marginTop:12, maxHeight:280, overflow:'auto'}}>
        {items.length===0 && <div style={{color:'#9aa3ad'}}>购物车为空</div>}
        {items.map(it => (
          <div key={it.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 0',borderBottom:'1px solid #f2f2f2'}}>
            <div>
              <div style={{fontWeight:700}}>{it.title}</div>
              <div style={{color:'#9aa3ad',fontSize:13}}>¥{it.price.toFixed(2)}</div>
            </div>
            <div style={{display:'flex',gap:8,alignItems:'center'}}>
              <button onClick={()=> onChangeQty(it.id, it.qty-1)} disabled={it.qty<=1}>−</button>
              <div>{it.qty}</div>
              <button onClick={()=> onChangeQty(it.id, it.qty+1)}>＋</button>
            </div>
          </div>
        ))}
      </div>

      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:12}}>
        <div>
          <div style={{fontWeight:800}}>合计：¥{total.toFixed(2)}</div>
          <div style={{fontSize:12,color:'#9aa3ad'}}>满 ¥20 起送</div>
        </div>
        <button onClick={onCheckout} className="btn">{total >= 20 ? '去结算' : '去凑单'}</button>
      </div>
    </div>
  )
}
