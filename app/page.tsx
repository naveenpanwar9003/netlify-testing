'use client'


import Image from "next/image"
import { useEffect, useState } from "react"



export default  function Home() {

  const [images, setimages] = useState<any>()

   useEffect(() => {

    (async function(){
        const res = await fetch(`${process.env.NODE_ENV == "development" ? "http://localhost:3000/" : "https://main--shiny-gingersnap-fc6e5d.netlify.app/"}api/images`);
        const {data} = await res.json();

        setimages(data)

    })()
    
     
    }, [])
  return (    
      <div>
        {images && images.map((image:any) => 
        <div key={image}>
        <img src={`${image}`} alt=""  />
        <Image src={`${image}`} width={400} height={200} alt=""/>
      </div>
        )}
      </div>
  )
}
