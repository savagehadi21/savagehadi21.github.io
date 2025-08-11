import React from 'react';

export default function Header({name, rating, sales, eta, badge}){
  return (
    <header className="header" role="banner">
      <div className="logo" aria-hidden="true">UNCLE<br/>BURGER</div>
      <div className="rest-info">
        <div className="rest-name">{name}</div>
        <div className="rest-meta">
          <span>⭐ {rating}</span>
          <span>· 月售 {sales}</span>
          <span>· 配送约 {eta}</span>
          {badge && <span style={{background:'#fff2e8',color:'#ff5c33',padding:'4px 8px',borderRadius:10}}>{badge}</span>}
        </div>
      </div>
      <div style={{fontSize:13,color:'#9aa3ad'}}>...</div>
    </header>
  )
}
