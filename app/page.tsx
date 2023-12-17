'use client'


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
        <>
        <img src={`/image/${image}`} alt=""  />
      
      </>
        )}
      </div>
  )
}
