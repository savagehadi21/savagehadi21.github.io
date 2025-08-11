const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000/api';

export async function fetchCategories(){
  const r = await fetch(`${API_BASE}/categories`);
  return r.json();
}
export async function fetchItems(category){
  const url = new URL(`${API_BASE}/items`);
  if(category) url.searchParams.set('category', category);
  const r = await fetch(url.toString());
  return r.json();
}
export async function fetchPromo(){
  const r = await fetch(`${API_BASE}/promo`);
  return r.json();
}
