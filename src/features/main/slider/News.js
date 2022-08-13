import React from "react";

export default function News({ item }){
  return (
    <a href={item.url} className='item' target='_blank' rel="noopener noreferrer">
      <img src={item.image} alt="news-article" className="item_img skeleton" />
      <div className="item_block">
        <p className="subtitle">{item.source.name}</p>
        <p className="title">{item.title}</p>
      </div>
    </a>
  )
}