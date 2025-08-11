# savagehadi21.github.io
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Restaurant Landing - Demo</title>
<style>
  :root{
    --bg:#fafafa;
    --card:#ffffff;
    --muted:#9aa3ad;
    --accent:#ff6b35;
    --accent-2:#ffdada;
    --price:#e53935;
    --pill-bg:#fff2e8;
    --shadow: 0 6px 20px rgba(0,0,0,0.06);
    --radius:12px;
    --max-width:960px;
  }

  /* Page layout */
  body{
    margin:0;
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    background:var(--bg);
    color:#111;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    line-height:1.35;
  }

  .container{
    max-width:var(--max-width);
    margin:0 auto;
    padding:12px;
  }

  /* Header */
  .header{
    display:flex;
    gap:12px;
    align-items:center;
    background:var(--card);
    padding:14px;
    border-radius:14px;
    box-shadow:var(--shadow);
    position:sticky;
    top:12px;
    z-index:20;
  }
  .logo{
    width:64px;
    height:64px;
    border-radius:12px;
    background:linear-gradient(135deg,#ffd54f,#ffb74d);
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:700;
    color:#222;
    font-size:14px;
    flex:0 0 64px;
  }
  .rest-info{
    flex:1;
    min-width:0;
  }
  .rest-name{
    font-size:17px;
    font-weight:700;
    margin:0 0 4px 0;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .rest-meta{
    color:var(--muted);
    font-size:13px;
    display:flex;
    gap:8px;
    align-items:center;
    flex-wrap:wrap;
  }
  .badge{
    background:var(--pill-bg);
    color:var(--price);
    padding:4px 8px;
    border-radius:10px;
    font-size:12px;
    border:1px solid rgba(230,80,80,0.08);
  }

  /* Tabs */
  .tabs{
    display:flex;
    gap:8px;
    margin:12px 0;
  }
  .tab{
    padding:8px 12px;
    background:linear-gradient(180deg,var(--card),#fff);
    border-radius:10px;
    box-shadow:var(--shadow);
    font-weight:600;
    font-size:14px;
  }

  /* Main grid: categories + product list */
  .main{
    display:grid;
    grid-template-columns: 120px 1fr;
    gap:12px;
    align-items:start;
  }

  /* Left categories */
  .categories{
    position:sticky;
    top:106px; /* header + tabs space */
    align-self:start;
    max-height:70vh;
    overflow:auto;
    padding:8px;
    background:transparent;
  }
  .cat-btn{
    display:flex;
    gap:10px;
    align-items:center;
    padding:10px 8px;
    border-radius:10px;
    cursor:pointer;
    font-size:14px;
    margin-bottom:6px;
    transition:all .15s;
  }
  .cat-btn:hover{ transform:translateX(4px); }
  .cat-btn.active{
    background:linear-gradient(90deg,#fff5f0,#fff);
    box-shadow:0 6px 18px rgba(255,105,85,0.06);
    border-left:3px solid var(--accent);
  }
  .cat-emoji{ font-size:18px; width:20px; text-align:center; }

  /* Products column */
  .products{
    padding:6px;
  }
  .promo{
    display:flex;
    gap:12px;
    background:linear-gradient(90deg,#fff,#fff7f6);
    padding:12px;
    border-radius:12px;
    align-items:center;
    margin-bottom:12px;
    box-shadow:var(--shadow);
  }
  .promo img{ width:74px; height:74px; object-fit:cover; border-radius:10px; }
  .promo .p-info{ font-size:13px; color:#333; }
  .promo .small{ color:var(--muted); font-size:12px; margin-top:6px; }

  .product-card{
    display:flex;
    gap:12px;
    background:var(--card);
    padding:12px;
    border-radius:12px;
    margin-bottom:12px;
    box-shadow:0 8px 20px rgba(16,24,40,0.04);
    align-items:center;
  }
  .product-img{
    width:92px;
    height:92px;
    border-radius:12px;
    flex:0 0 92px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:linear-gradient(135deg,#fff,#fafafa);
    overflow:hidden;
  }
  .product-img svg{ width:88px; height:88px; display:block; }

  .product-meta{ flex:1; min-width:0; }
  .product-meta h3{ margin:0 0 6px 0; font-size:16px; font-weight:700; }
  .product-meta .desc{ font-size:13px; color:var(--muted); margin-bottom:8px; }
  .product-price{ display:flex; gap:10px; align-items:center; font-size:15px; }

  .old-price{ color:var(--muted); text-decoration:line-through; font-size:13px; }
  .price-now{ color:var(--price); font-weight:800; font-size:17px; }
  .tag{ background:#fff7ef; color:#ff7c4d; padding:4px 8px; border-radius:10px; font-size:12px; border:1px solid rgba(255,120,60,0.08); }

  /* bottom sticky bar */
  .bottom-bar{
    position:fixed;
    left:0;
    right:0;
    bottom:12px;
    display:flex;
    justify-content:center;
    pointer-events:none;
  }
  .cart{
    width:calc(100% - 24px);
    max-width:var(--max-width);
    pointer-events:all;
    background:linear-gradient(90deg,#111,#111);
    color:#fff;
    padding:12px 16px;
    border-radius:999px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    box-shadow:0 10px 30px rgba(0,0,0,0.25);
    font-weight:700;
  }
  .cart .left{ display:flex; gap:12px; align-items:center; }
  .cart .btn{
    background:#ffb399;
    color:#111;
    padding:8px 14px;
    border-radius:999px;
    font-weight:800;
    border:none;
    cursor:pointer;
  }

  /* Responsive tweaks */
  @media (max-width:720px){
    .main{ grid-template-columns: 92px 1fr; }
    .logo{ width:56px; height:56px; flex:0 0 56px; }
    .header{ padding:10px; }
    .header{ top:8px; border-radius:10px; }
    .rest-name{ font-size:15px; }
    .products{ padding:4px; }
    .promo img{ width:60px; height:60px; }
    .product-img{ width:78px; height:78px; flex:0 0 78px; }
    .cart{ padding:10px; }
  }

  @media (max-width:480px){
    /* collapse left column into horizontal categories at top for very narrow screens */
    .main{ grid-template-columns: 1fr; }
    .categories{
      display:flex;
      overflow:auto;
      gap:8px;
      padding-bottom:6px;
      top:88px;
      margin-bottom:8px;
    }
    .cat-btn{ min-width:86px; justify-content:flex-start; padding:8px 12px; border-radius:10px; border-left:0; }
    .cat-emoji{ margin-right:6px; }
    .product-card{ padding:10px; }
  }

  /* small scrollbars */
  .categories::-webkit-scrollbar, .promos::-webkit-scrollbar, .products::-webkit-scrollbar { height:6px; width:6px; }
  .categories::-webkit-scrollbar-thumb{ background:rgba(0,0,0,0.08); border-radius:6px; }

  /* subtle entrance animation */
  .product-card{ transform:translateY(6px); opacity:0; animation: enter .35s forwards; }
  .product-card:nth-child(1){ animation-delay:0.04s }
  .product-card:nth-child(2){ animation-delay:0.07s }
  .product-card:nth-child(3){ animation-delay:0.10s }
  @keyframes enter { to{ transform:none; opacity:1; } }
</style>
</head>
<body>
<div class="container">

  <header class="header" role="banner">
    <div class="logo" aria-hidden="true">UNCLE<br/>BURGER</div>
    <div class="rest-info">
      <div class="rest-name">UNCLE叔叔汉堡（花江店）</div>
      <div class="rest-meta">
        <span>⭐ 4.7</span>
        <span>· 月售 800+</span>
        <span>· 配送约 47 分钟</span>
        <span class="badge">新人减1</span>
      </div>
    </div>
    <div style="font-size:13px;color:var(--muted)">...</div>
  </header>

  <nav class="tabs" aria-label="Main tabs">
    <div class="tab">点菜</div>
    <div class="tab">评价</div>
    <div class="tab">商家</div>
  </nav>

  <section class="main">
    <aside class="categories" id="categories" aria-label="Categories">
      <!-- categories will be injected here -->
    </aside>

    <main class="products" id="products" aria-live="polite">
      <!-- promo block -->
      <div class="promo">
        <img src="data:image/svg+xml;utf8,
          <svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'>
            <rect rx='12' width='120' height='120' fill='%23ef5350'/>
            <text x='50%' y='50%' fill='white' font-size='20' font-family='Arial' text-anchor='middle' dominant-baseline='middle'>COKE</text>
          </svg>" alt="promo" />
        <div class="p-info">
          <div style="font-weight:800">1张 | 可口可乐300ML瓶</div>
          <div class="small">可选：可口可乐300ML瓶 · 用券享6.67折 · ￥2</div>
        </div>
      </div>

      <!-- product list will be injected here -->
    </main>
  </section>

</div>

<!-- bottom cart -->
<div class="bottom-bar">
  <div class="cart" role="status" aria-live="polite">
    <div class="left">
      <div style="width:36px;height:36px;border-radius:50%;background:#fff2f0;color:#ff5c33;display:flex;align-items:center;justify-content:center;font-weight:900">🛒</div>
      <div>
        <div style="font-size:14px">已选 0 件</div>
        <div style="font-size:12px;color:#ffdcdc">满 ¥20 起送</div>
      </div>
    </div>
    <div style="display:flex;gap:8px;align-items:center">
      <div style="font-size:16px;font-weight:900">￥0</div>
      <button class="btn">去结算</button>
    </div>
  </div>
</div>

<script>
/* Demo data (replace with API data in real project) */
const DATA = {
  categories: [
    {id:'all', name:'小汉堡', emoji:'🍔'},
    {id:'beef', name:'牛肉汉堡', emoji:'🥩'},
    {id:'chicken', name:'鸡肉汉堡', emoji:'🍗'},
    {id:'combo', name:'超值套餐', emoji:'🍱'},
    {id:'special', name:'特色肉卷', emoji:'🌯'},
    {id:'sides', name:'小食', emoji:'🍟'},
  ],
  items: [
    {id:1, cat:'all', title:'叔叔汉堡', desc:'多层牛肉饼 + 芝士 + 新鲜蔬菜', price:15, old:18, tag:'10+回头客推荐'},
    {id:2, cat:'beef', title:'小牛肉汉堡', desc:'店内热销，口感嫩滑', price:7.9, old:12, tag:'门店销量第3名'},
    {id:3, cat:'chicken', title:'小奥尔良鸡肉汉堡', desc:'鸡腿肉腌制烤制，香辣适中', price:9.9, old:12.5, tag:'10+回头客推荐'},
    {id:4, cat:'combo', title:'超值双人套餐', desc:'两份主食 + 两份饮料', price:39.9, old:56, tag:'超值'},
    {id:5, cat:'special', title:'特色肉卷', desc:'手工卷饼，独特风味', price:12.5, old:15, tag:'新品'},
    {id:6, cat:'sides', title:'薯条小份', desc:'外脆里软', price:4.9, old:6.5, tag:'热卖'},
  ]
};

/* render categories */
const catRoot = document.getElementById('categories');
const prodRoot = document.getElementById('products');

function createCatButton(cat){
  const btn = document.createElement('button');
  btn.className = 'cat-btn' + (cat.id === 'all' ? ' active':'');
  btn.dataset.cat = cat.id;
  btn.setAttribute('aria-pressed', cat.id==='all' ? 'true':'false');
  btn.innerHTML = `<span class="cat-emoji">${cat.emoji}</span><span class="cat-name">${cat.name}</span>`;
  btn.addEventListener('click', ()=> {
    document.querySelectorAll('.cat-btn').forEach(b=>{ b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed','true');
    renderItems(cat.id);
  });
  return btn;
}
DATA.categories.forEach(c => catRoot.appendChild(createCatButton(c)));

/* small inline svg burger icon for product images */
function burgerSVG(){
  return `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="burger">
    <rect width="100%" height="100%" rx="12" fill="none"/>
    <g transform="translate(0,0)">
      <ellipse cx="100" cy="42" rx="72" ry="20" fill="#e0a87d"/>
      <rect x="28" y="50" width="144" height="28" rx="14" fill="#f7d2a1"/>
      <path d="M30 80 q70 34 140 0" fill="#b23e22"/>
      <rect x="36" y="96" width="128" height="12" rx="6" fill="#f5f5f5"/>
      <rect x="36" y="110" width="128" height="16" rx="8" fill="#d3f36b"/>
    </g>
  </svg>`;
}

/* render product cards */
function createProductCard(item){
  const wrap = document.createElement('article');
  wrap.className = 'product-card';
  wrap.innerHTML = `
    <div class="product-img" aria-hidden="true">${burgerSVG()}</div>
    <div class="product-meta">
      <h3>${item.title}</h3>
      <div class="desc">${item.desc}</div>
      <div style="display:flex;gap:8px;align-items:center;justify-content:space-between">
        <div class="product-price">
          <div class="price-now">¥${Number(item.price).toFixed(2)}</div>
          <div class="old-price">¥${Number(item.old).toFixed(2)}</div>
          <div class="tag">${item.tag}</div>
        </div>
        <div>
          <button style="background:#fff;border:1px solid #eee;padding:6px 10px;border-radius:8px;cursor:pointer" data-id="${item.id}" class="add-btn">＋</button>
        </div>
      </div>
    </div>
  `;
  return wrap;
}

/* update cart UI (basic demo) */
let cartCount = 0;
let cartTotal = 0;
function updateCartUI(){
  document.querySelector('.cart .left div').children[0].textContent = `已选 ${cartCount} 件`;
  document.querySelector('.cart > div:last-child > div').textContent = `￥${cartTotal.toFixed(2)}`;
  document.querySelector('.cart .btn').textContent = cartTotal >= 20 ? '去结算' : '去凑单';
}

/* render items by category */
function renderItems(catId){
  // clear older product cards (but keep promo)
  // remove all nodes after promo (promo is first child of products)
  while(prodRoot.childElementCount > 1){
    prodRoot.removeChild(prodRoot.lastChild);
  }
  const items = DATA.items.filter(it => catId === 'all' ? true : it.cat === catId);
  if(items.length === 0){
    const empty = document.createElement('div');
    empty.style.padding='20px';
    empty.style.color='var(--muted)';
    empty.textContent = '该分类暂无商品';
    prodRoot.appendChild(empty);
    return;
  }
  items.forEach(it=>{
    const card = createProductCard(it);
    prodRoot.appendChild(card);
  });

  // attach add button handlers
  document.querySelectorAll('.add-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = Number(btn.dataset.id);
      const item = DATA.items.find(x=>x.id===id);
      cartCount += 1;
      cartTotal += Number(item.price);
      updateCartUI();
      // tiny feedback
      btn.animate([{transform:'scale(1)'},{transform:'scale(1.08)'},{transform:'scale(1)'}],{duration:220});
    });
  });
}

/* initial render */
renderItems('all');
updateCartUI();

/* accessibility: keyboard navigation for categories */
catRoot.addEventListener('keydown', (e)=>{
  const active = document.activeElement;
  if(e.key === 'ArrowRight' || e.key === 'ArrowDown'){
    e.preventDefault();
    const next = active.nextElementSibling || catRoot.firstElementChild;
    next.focus();
  }
  if(e.key === 'ArrowLeft' || e.key === 'ArrowUp'){
    e.preventDefault();
    const prev = active.previousElementSibling || catRoot.lastElementChild;
    prev.focus();
  }
});

/* Optional: scroll-to behavior when switching categories (if using anchors) */
/* In a real app you'd fetch data via XHR/fetch and populate dynamically */
</script>
</body>
</html>
