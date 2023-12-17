'use client'

import Image from "next/image"
import { useEffect, useState } from "react"



export default  function Home() {

  const [images, setimages] = useState<any>()

   useEffect(() => {

    (async function(){
        const res = await fetch(`${process.env.NODE_ENV == "development" ? "http://localhost:3000/" : "https://shiny-gingersnap-fc6e5d.netlify.app/"}api/images`);
        const {data} = await res.json();

        setimages(data)

    })()
    
     
    }, [])
  return (    
      <div>
        {images && images.map((image:any) => 

        <Image src={`/image/${image}`} alt="" key={image} width={400} height={200}/>

        )}
      </div>
  )
}
