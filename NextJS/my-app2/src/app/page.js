"use client";
import dynamic from "next/dynamic"
import { useState } from "react"

const Lazycomp = dynamic(()=> import('../components/Lazycomp'),{
  loading:()=> <h1>Loading...</h1>
})

function Home(){
  const[shown,setShown] = useState(false);

  return<>
    <div>
      <p>GeeksforGeeks lazy loading article in nextjs app</p>
      <button onClick={()=> setShown(!shown)} style={{background:"green",color:"white"}}>
          Load Component
      </button>  
      {shown && <Lazycomp/>}
    </div>
  </>
}
export default Home;