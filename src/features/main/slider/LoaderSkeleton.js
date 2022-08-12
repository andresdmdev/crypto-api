import React from "react";
import { nanoid } from "@reduxjs/toolkit";

export default function LoaderSkeleton(){

  const skeletonArray = [1,2,3,4,5,6,7,8].map(elem => {
    return (
      <div className='item loader_skeleton' key={nanoid()}>
        <div className="item_img skeleton"></div>
        <div className="item_block_skeleton">
          <div className="subtitle skeleton skeleton-text first"></div>
          <div className="title skeleton skeleton-text"></div>
          <div className="title skeleton skeleton-text last"></div>
        </div>
      </div>
    )
  })

  return (
    <>
      {skeletonArray}
    </>
  )
}