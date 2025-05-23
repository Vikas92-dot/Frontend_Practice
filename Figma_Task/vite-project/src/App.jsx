import { useState } from "react";

function App(){
  const [baseText, setBaseText] = useState('+1000€');
  const[basePrice,setBasePrice] = useState(1000);
  const[color,setColor] = useState('0');
  const[colorPrice, setColorPrice] = useState(0);
  const[power,setPower] = useState('0');
   const[powerPrice,setPowerPrice] = useState(0);
  const[warp,setWarp] = useState('0');
   const[warpPrice,setWarpPrice] = useState(0);
  const[package1,setPackage] = useState();
   const[packagePrice,setPackagePrice] = useState(0);
  const[total,setTotal] = useState(basePrice+colorPrice+powerPrice+warpPrice+packagePrice);

  function handleColor(color){
    
    if(color === "snow"){
      setColor("+0€");
      setColorPrice(0);
      setTotal(total+0);
    }
    else if(color === "volcano"){
      setColor("+100€");
      setColorPrice(100);
      setTotal(total+100);
    }
    else if(color === "sky")
      {setColor("+100€");
      setColorPrice(100);
      setTotal(total+100);}
  }

  
  function handlePower(power){
    
    if(power === "100MW"){
      setPower("+0€");
      setPowerPrice(0);
      setTotal(total+0);
    }
    else if(power === "150MW"){
      setPower("+200€");
      setPowerPrice(200);
      setTotal(total+200);
    }
    else if(power === "500MW"){

      setPower("+500€");
      setPowerPrice(500);
      setTotal(total+500);
    }
  }

    function handleWarp(warp){
    
    if(warp === "NO"){
      setWarp("+0€");
      setWarpPrice(0);
      setTotal(total+0);
    }
    else{
      setWarp("+1000€");
      setWarpPrice(1000);
      setTotal(total+1000);
    }
  }

  function handlePackage(type){
    
    if(type === "sport"){
      setPackage("+100€");
      setPackagePrice(100);
      setTotal(total+100);
    }
    else{
      setPackage("+500€");
      setPackagePrice(500);
      setTotal(total+500);
    }
    
  }


  return<>
      <div className="" style={{background:"#051544",height:"150vh",width:"100%"}}> 
        <div className="" style={{border:"1px solid #7BF762",height:"860px",width:"944px",position:"absolute",top:"32px",left:"248px",borderRadius:"8px"}}>
            <p className="" style={{color:"#7BF762",font:"Roboto Mono",fontSize:"24px",fontWeight:"400px",position:"absolute",top:"72px",left:"320px"}}>Spaceship Configurator</p>
            <p style={{position:"absolute",width:"141px",height:"24px",top:"144px",left:"50px",font:"Roboto Mono",fontWeight:"400px",color:"#7BF762",fontSize:"18px"}}>Select color:</p>
              
            {/* Color Div */}

            <div onClick={()=>{handleColor("snow")}} style={{height:"112px",width:"160px",border:"1px solid #5A8F4F",borderRadius:"5px",position:"absolute",top:"176px",left:"50px"}}>
                <div style={{height:"32px",width:"64px",border:"8px solid #FFFFFF",borderRadius:"5px",position:"absolute",top:"16px",left:"48px",background:"#FFFFFF"}}>
                  <span style={{width:"25px",height:"10px",position:"absolute",top:"30px",left:"10px",color:"#5A8F4F"}}>+0€</span>
                  <span style={{width:"68px",height:"10px",position:"absolute",top:"55px",left:"2px",color:"#5A8F4F"}}>Snow</span>
                </div>
            </div>

            <div onClick={()=>{handleColor("volcano")}} style={{height:"112px",width:"160px",border:"1px solid #5A8F4F",borderRadius:"5px",position:"absolute",top:"176px",left:"220px"}}>
              <div style={{height:"32px",width:"64px",border:"8px solid #FF7A00",borderRadius:"5px",position:"absolute",top:"16px",left:"48px",background:"#FF7A00"}}>
                <span style={{width:"25px",height:"10px",position:"absolute",top:"30px",left:"2px",color:"#5A8F4F"}}>+100€</span>
                <span style={{width:"68px",height:"10px",position:"absolute",top:"55px",left:"2px",color:"#5A8F4F"}}>Volcano</span>
              </div>
            </div>

            <div onClick={()=>{handleColor("sky")}}  style={{height:"112px",width:"160px",border:"1px solid #5A8F4F",borderRadius:"5px",position:"absolute",top:"176px",left:"390px"}}>
              <div style={{height:"32px",width:"64px",border:"8px solid #6BE4FF",borderRadius:"5px",position:"absolute",top:"16px",left:"48px",background:"#6BE4FF"}}>
                <span style={{width:"25px",height:"10px",position:"absolute",top:"30px",left:"2px",color:"#5A8F4F"}}>+100€</span>
                <span style={{width:"68px",height:"10px",position:"absolute",top:"55px",left:"12px",color:"#5A8F4F"}}>Sky</span>
              </div>
            </div>

            {/* Total div */}

            <div style={{height:"240px",width:"304px",border:"1px solid #5A8F4F",borderRadius:"5px",position:"absolute",top:"176px",left:"600px",background:"#1C3C16",color:"#7BF762"}}>
              <span style={{width:"121px",height:"18px",position:"absolute",top:"10px",left:"12px"}}>Base Price:</span>
              <span style={{width:"121px",color:"#FFFFFF",height:"18px",position:"absolute",top:"10px",left:"200px"}}>{baseText}</span>

              <span style={{width:"121px",height:"18px",position:"absolute",top:"40px",left:"12px"}}>Color:</span>
              <span style={{width:"121px",color:"#FFFFFF",height:"18px",position:"absolute",top:"40px",left:"200px"}}>{color}</span>

              <span style={{width:"121px",height:"18px",position:"absolute",top:"70px",left:"12px"}}>Power:</span>
              <span style={{width:"121px",color:"#FFFFFF",height:"18px",position:"absolute",top:"70px",left:"200px"}}>{power}</span>

              <span style={{width:"121px",height:"18px",position:"absolute",top:"100px",left:"12px"}}>Warp drive:</span>
              <span style={{width:"121px",color:"#FFFFFF",height:"18px",position:"absolute",top:"100px",left:"200px"}}>{warp}</span>


                <span style={{width:"121px",height:"18px",position:"absolute",top:"130px",left:"12px"}}>Option package:</span>
                <span style={{width:"121px",color:"#FFFFFF",height:"18px",position:"absolute",top:"130px",left:"200px"}}>{package1}</span>
                <hr style={{position:"relative",top:"150px",left:"1px",border:"1px solid #7BF762",color:"#7BF762"}} />

                <span style={{width:"83px",height:"18px",position:"absolute",top:"180px",left:"12px",font:"Roboto Mono",fontWeight:"400"}}>Total:</span>
                <span style={{width:"83px",color:"#FFFFFF",height:"18px",position:"absolute",top:"180px",left:"200px",font:"Roboto Mono",fontWeight:"400"}}>{total}</span>
            </div>
                  
            {/* Power Div */}

            <p style={{position:"absolute",width:"141px",height:"24px",top:"336px",left:"50px",font:"Roboto Mono",fontWeight:"400px",color:"#7BF762",fontSize:"18px"}}>Select Power:</p>

            <div onClick={()=>{handlePower("100MW")}} style={{height:"64px",width:"160px",border:"1px solid #5A8F4F",borderRadius:"5px",position:"absolute",top:"368px",left:"50px"}}>
              <span style={{width:"66px",height:"8px",position:"absolute",top:"10px",left:"50px",color:"#5A8F4F"}}>100 MW</span>
              <span style={{width:"66px",height:"8px",position:"absolute",top:"35px",left:"60px",color:"#5A8F4F"}}>+0€</span>
            </div>
            
                

            <div onClick={()=>{handlePower("150MW")}}  style={{height:"64px",width:"160px",border:"1px solid #5A8F4F",borderRadius:"5px",position:"absolute",top:"368px",left:"220px"}}>
              <span style={{width:"66px",height:"8px",position:"absolute",top:"10px",left:"50px",color:"#5A8F4F"}}>150 MW</span>
              <span style={{width:"66px",height:"8px",position:"absolute",top:"35px",left:"60px",color:"#5A8F4F"}}>+200€</span>
            </div>
            
            <div onClick={()=>{handlePower("200MW")}}  style={{height:"64px",width:"160px",border:"1px solid #5A8F4F",borderRadius:"5px",position:"absolute",top:"368px",left:"390px"}}>
              <span style={{width:"66px",height:"8px",position:"absolute",top:"10px",left:"50px",color:"#5A8F4F"}}>200 MW</span>
              <span style={{width:"66px",height:"8px",position:"absolute",top:"35px",left:"60px",color:"#5A8F4F"}}>+500€</span>
            </div>
                  
           {/* Wrap Div */}

           <p style={{position:"absolute",width:"141px",height:"24px",top:"481px",left:"50px",font:"Roboto Mono",fontWeight:"400px",color:"#7BF762",fontSize:"18px",width:"100%"}}>Wrap drive:</p>

            <div onClick={()=>{ handleWarp("NO")}} style={{height:"64px",width:"160px",border:"1px solid #5A8F4F",borderRadius:"5px",position:"absolute",top:"513px",left:"50px"}}>
              <span style={{width:"66px",height:"8px",position:"absolute",top:"10px",left:"60px",color:"#5A8F4F"}}>NO</span>
              <span style={{width:"66px",height:"8px",position:"absolute",top:"35px",left:"60px",color:"#5A8F4F"}}>+0€</span>
            </div>

            <div onClick={()=>{ handleWarp("YES")}} style={{height:"64px",width:"160px",border:"1px solid #5A8F4F",borderRadius:"5px",position:"absolute",top:"513px",left:"220px"}}>
              <span style={{width:"66px",height:"8px",position:"absolute",top:"10px",left:"60px",color:"#5A8F4F"}}>YES</span>
              <span style={{width:"66px",height:"8px",position:"absolute",top:"35px",left:"50px",color:"#5A8F4F"}}>+1000€</span>
            </div>

          {/* Option Package */}
           <p style={{position:"absolute",width:"141px",height:"24px",top:"615px",left:"50px",font:"Roboto Mono",fontWeight:"400px",color:"#7BF762",fontSize:"18px",width:"100%"}}>Select option package:</p>

            <div style={{height:"192px",width:"160px",border:"1px solid #5A8F4F",borderRadius:"5px",position:"absolute",top:"645px",left:"50px"}}>
              <span style={{width:"66px",height:"8px",position:"absolute",top:"10px",left:"60px",color:"#5A8F4F"}}>Basic</span>

            </div>

            <div onClick={()=>{handlePackage("sport")}} style={{height:"192px",width:"160px",border:"1px solid #5A8F4F",borderRadius:"5px",position:"absolute",top:"646px",left:"220px"}}>
              <span style={{width:"66px",height:"8px",position:"absolute",top:"10px",left:"60px",color:"#5A8F4F"}}>Sport</span>
              <span style={{width:"66px",height:"8px",position:"absolute",top:"35px",left:"50px",color:"#5A8F4F"}}>+100€</span>
            </div>

            <div onClick={()=>{handlePackage("lux")}} style={{height:"192px",width:"160px",border:"1px solid #5A8F4F",borderRadius:"5px",position:"absolute",top:"646px",left:"390px"}}>
              <span style={{width:"66px",height:"8px",position:"absolute",top:"10px",left:"60px",color:"#5A8F4F"}}>Lux</span>
              <span style={{width:"66px",height:"8px",position:"absolute",top:"35px",left:"50px",color:"#5A8F4F"}}>+500€</span>
            </div>


              
        </div>
      </div>
  </>
}
export default App;