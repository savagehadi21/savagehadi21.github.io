import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import Categories from './components/Categories'
import Products from './components/Products'
import CartDrawer from './components/CartDrawer'
import { fetchCategories, fetchItems, fetchPromo } from './api'

export default function App(){
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState('all');
  const [items, setItems] = useState([]);
  const [promo, setPromo] = useState(null);

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(()=> {
    fetchCategories().then(setCategories).catch(()=> setCategories([]));
    fetchPromo().then(setPromo).catch(()=> setPromo(null));
  },[]);

  useEffect(()=> {
    fetchItems(active).then(setItems).catch(()=> setItems([]));
  },[active]);

  function addToCart(item){
    setCartItems(prev => {
      const found = prev.find(p => p.id === item.id);
      if(found) return prev.map(p => p.id===item.id ? {...p, qty: p.qty + 1} : p);
      return [...prev, {...item, qty:1}];
    });
  }

  function changeQty(id, qty){
    setCartItems(prev => {
      if(qty <= 0) return prev.filter(i => i.id !== id);
      return prev.map(i => i.id === id ? {...i, qty} : i);
    });
  }

  function checkout(){
    alert('仿真结算（只是 demo）');
    setCartItems([]);
    setCartOpen(false);
  }

  const totalCount = cartItems.reduce((s,i)=> s + i.qty, 0);
  const totalPrice = cartItems.reduce((s,i)=> s + i.qty * i.price, 0);

  return (
    <div className="app">
      <Header name="UNCLE叔叔汉堡（花江店）" rating="4.7" sales="800+" eta="47 分钟" badge="新人减1" />
      <nav className="tabs"><div className="tab">点菜</div><div className="tab">评价</div><div className="tab">商家</div></nav>

      <section className="main">
        <Categories categories={categories} active={active} onSelect={setActive} />
        <Products items={items} onAdd={(it)=> { addToCart(it); }} promo={promo}/>
      </section>

      <div className="bottom-bar">
        <div className="cart" role="status" aria-live="polite">
          <div style={{display:'flex',gap:12,alignItems:'center'}}>
            <div style={{width:36,height:36,borderRadius:50,background:'#fff2f0',color:'#ff5c33,',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900}}>🛒</div>
            <div>
              <div style={{fontSize:14}}>已选 {totalCount} 件</div>
              <div style={{fontSize:12,color:'#ffdcdc'}}>满 ¥20 起送</div>
            </div>
          </div>

          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <div style={{fontSize:16,fontWeight:900}}>￥{totalPrice.toFixed(2)}</div>
            <button onClick={()=> setCartOpen(true)} className="btn">{totalPrice >= 20 ? '去结算' : '去凑单'}</button>
          </div>
        </div>
      </div>

      <CartDrawer open={cartOpen} items={cartItems} onClose={()=> setCartOpen(false)} onChangeQty={changeQty} onCheckout={checkout} />
    </div>
  )
}
