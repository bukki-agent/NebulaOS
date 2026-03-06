import React from 'react';
export default function Sidebar({active,onTab}:{active:string,onTab:(id:string)=>void}){ return (<aside className="nebula-sidebar">{['reactive','personal','saas'].map(id=> (<div key={id} onClick={()=>onTab(id)} className={active===id? 'item active':'item'}>{id}</div>))}</aside>); }
