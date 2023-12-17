'use client'

import { useEffect, useState } from "react"
import { getImages } from "./actions/getImages"


export default function Home() {

  const [images, setimages] = useState<any>()

   useEffect(() => {

    (async function(){
       const images = await getImages();
       setimages(images)
       console.log(images)
    })()
    
     
    }, [])
  return (    
      <div>
        {images && images.map(image => 
          <img src={`/image/${image}`} alt="" key={image} />
        )}
      </div>
  )
}
