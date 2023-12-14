import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Lazyimg = ({className, src}) => {
  return (
    <div className={className || '' || "w-40"}>
        <LazyLoadImage src={src}/>
    </div>
  )
}

export default Lazyimg
