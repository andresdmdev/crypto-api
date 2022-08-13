import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import arrayLoader from "../../../helpers/arrayLoaders";

export default function LoaderSkeleton(){

  const skeletonArray = arrayLoader(8).map(elem => {
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