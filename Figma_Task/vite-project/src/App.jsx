import { useState } from "react";
import { useEffect } from "react";
import './App.css'

function App(){
  const[basePrice,setBasePrice] = useState(1000);
  const[colorPrice, setColorPrice] = useState(0);
  const[powerPrice,setPowerPrice] = useState(0);
  const[warpPrice,setWarpPrice] = useState(0);
  const[packagePrice,setPackagePrice] = useState(0);
  const[total,setTotal] = useState(basePrice+colorPrice+powerPrice+warpPrice+packagePrice);
  const[isClick,setIsClick] = useState({color:'',power:'',warp:'',type:'basic'});

useEffect(() => {
  setTotal(basePrice + colorPrice + powerPrice + warpPrice + packagePrice);
}, [basePrice, colorPrice, powerPrice, warpPrice, packagePrice]);

  function handleColor(color){
    
    if(color === "snow"){
      setColorPrice(0);
      setIsClick({...isClick,color:'snow'});
    }
    else if(color === "volcano"){
      setColorPrice(100);
      setIsClick({...isClick,color:'volcano'});
    }
    else if(color === "sky"){
      setColorPrice(100);
      setIsClick({...isClick,color:'sky'});
    }
  }

  
  function handlePower(power){
    
    if(power === "100MW"){
      setPowerPrice(0);
      setIsClick({...isClick,power:'100MW'});
    }
    else if(power === "150MW"){
      setPowerPrice(200);
      setIsClick({...isClick,power:'150MW'});
    }
    else if(power === "200MW"){
      setPowerPrice(500);
      setIsClick({...isClick,power:'200MW'});
    }
  }

    function handleWarp(warp){
    
    if(warp === "NO"){
      setWarpPrice(0);
      setIsClick({...isClick,warp:'NO'});
    }
    else{
      setWarpPrice(1000);
      setIsClick({...isClick,warp:'YES'});
    }
  }

  function handlePackage(type){

    if(type === 'basic'){
      setIsClick({...isClick,type:'basic'});
      setPackagePrice(0);
    }
    
    else if(type === "sport"){
      setPackagePrice(100);
      setIsClick({...isClick,type:'sport'});
      
    }
    else{
      setPackagePrice(500);
      setIsClick('lux');
      setIsClick({...isClick,type:'lux'});
    }
  }

  return<>
      <div className="main-container"> 
        <div className="box">
            <p className="heading">Spaceship Configurator</p>
            <p className="title-1">Select color:</p>
              
            {/* Color Div */}

            <div className={isClick.color === 'snow' ? "color-1-click" : "color-1-notClick"} onClick={()=>{handleColor("snow")}}>
                <div className="color-1-div" >
                  <span className={isClick.color === 'snow' ? "div-price-click" : "div-price-notClick"}>+0€</span>
                  <span className={isClick.color === 'snow' ? "div-name-click" : "div-name-notClick"}>Snow</span>
                </div>
            </div>

            <div className={isClick.color === 'volcano' ? "color-2-clicked" : "color-2-notClicked"} onClick={()=>{handleColor("volcano")}}>

              <div className="color-2-div">

                <span style={isClick.color === 'volcano' ? {width:"25px",height:"10px",position:"absolute",top:"30px",left:"2px",color:"#7BF762"} : {width:"25px",height:"10px",position:"absolute",top:"30px",left:"2px",color:"#5A8F4F"}}>+100€</span>

                <span style={isClick.color === 'volcano' ? {width:"68px",height:"10px",position:"absolute",top:"55px",left:"2px",color:"#7BF762"} : {width:"68px",height:"10px",position:"absolute",top:"55px",left:"2px",color:"#5A8F4F"}}>Volcano</span>
              </div>
            </div>

            <div className={isClick.color === "sky" ? "color-3-clicked" : "color-3-notClicked"} onClick={()=>{handleColor("sky")}} 
            >
              <div style={{height:"32px",width:"64px",border:"8px solid #6BE4FF",borderRadius:"5px",position:"absolute",top:"16px",left:"48px",background:"#6BE4FF"}}>

                <span style={isClick.color === 'sky'  ? 
                  {width:"25px",height:"10px",position:"absolute",top:"30px",left:"2px",color:"#7BF762"} 
                  :{width:"25px",height:"10px",position:"absolute",top:"30px",left:"2px",color:"#5A8F4F"}}>+100€</span>

                <span style={isClick.color === 'sky' ? 
                  {width:"68px",height:"10px",position:"absolute",top:"55px",left:"12px",color:"#7BF762"}  
                  : {width:"68px",height:"10px",position:"absolute",top:"55px",left:"12px",color:"#5A8F4F"}}>Sky</span>
              </div>
            </div>

            {/* Total div */}

            <div style={{height:"240px",width:"304px",border:"1px solid #5A8F4F",borderRadius:"5px",position:"absolute",top:"176px",left:"600px",background:"#1C3C16",color:"#7BF762"}}>
              <span style={{width:"121px",height:"18px",position:"absolute",top:"10px",left:"12px"}}>Base Price:</span>
              <span style={{width:"121px",color:"#FFFFFF",height:"18px",position:"absolute",top:"10px",left:"200px"}}>{basePrice}€</span>

              <span style={{width:"121px",height:"18px",position:"absolute",top:"40px",left:"12px"}}>Color:</span>
              <span style={{width:"121px",color:"#FFFFFF",height:"18px",position:"absolute",top:"40px",left:"200px"}}>{colorPrice}€</span>

              <span style={{width:"121px",height:"18px",position:"absolute",top:"70px",left:"12px"}}>Power:</span>
              <span style={{width:"121px",color:"#FFFFFF",height:"18px",position:"absolute",top:"70px",left:"200px"}}>{powerPrice}€</span>

              <span style={{width:"121px",height:"18px",position:"absolute",top:"100px",left:"12px"}}>Warp drive:</span>
              <span style={{width:"121px",color:"#FFFFFF",height:"18px",position:"absolute",top:"100px",left:"200px"}}>{warpPrice}€</span>


                <span style={{width:"121px",height:"18px",position:"absolute",top:"130px",left:"12px"}}>Option package:</span>
                <span style={{width:"121px",color:"#FFFFFF",height:"18px",position:"absolute",top:"130px",left:"200px"}}>{packagePrice}€</span>
                <hr style={{position:"relative",top:"150px",left:"1px",border:"1px solid #7BF762",color:"#7BF762"}} />

                <span style={{width:"83px",height:"18px",position:"absolute",top:"180px",left:"12px",font:"Roboto Mono",fontWeight:"400"}}>Total:</span>
                <span style={{width:"83px",color:"#FFFFFF",height:"18px",position:"absolute",top:"180px",left:"200px",font:"Roboto Mono",fontWeight:"400"}}>{`${total}€`}</span>
            </div>
                  
            {/* Power Div */}

            <p style={{position:"absolute",width:"141px",height:"24px",top:"336px",left:"50px",font:"Roboto Mono",fontWeight:"400px",color:"#7BF762",fontSize:"18px"}}>Select Power:</p>

            <div className={isClick.power === "100MW" ? "power-1-clicked" :"power-1-notClicked"} onClick={()=>{handlePower("100MW")}}>

              <span style={isClick.power === '100MW' ? {width:"66px",height:"8px",position:"absolute",top:"10px",left:"50px",color:"#7BF762"} : {width:"66px",height:"8px",position:"absolute",top:"10px",left:"50px",color:"#5A8F4F"}}>100 MW</span>

              <span style={isClick.power === '100MW' ? {width:"66px",height:"8px",position:"absolute",top:"35px",left:"60px",color:"#7BF762"}   : {width:"66px",height:"8px",position:"absolute",top:"35px",left:"60px",color:"#5A8F4F"}}>+0€</span>

            </div>
            
            <div className={isClick.power === '150MW' ?  "power-2-clicked" : "power-2-notClicked"} onClick={()=>{handlePower("150MW")}}>

              <span style={isClick.power === '150MW' ? {width:"66px",height:"8px",position:"absolute",top:"10px",left:"50px",color:"#7BF762"} : {width:"66px",height:"8px",position:"absolute",top:"10px",left:"50px",color:"#5A8F4F"}}>150 MW</span>

              <span style={isClick.power === '150MW' ? {width:"66px",height:"8px",position:"absolute",top:"35px",left:"60px",color:"#7BF762"} : {width:"66px",height:"8px",position:"absolute",top:"35px",left:"60px",color:"#5A8F4F"}}>+200€</span>
            </div>
            
            <div className={isClick.power === '200MW' ? "power-3-clicked" : "power-3-notClicked"} onClick={()=>{handlePower("200MW")}}>

              <span style={isClick.power === '200MW' ? {width:"66px",height:"8px",position:"absolute",top:"10px",left:"50px",color:"#7BF762"} : {width:"66px",height:"8px",position:"absolute",top:"10px",left:"50px",color:"#5A8F4F"}}>200 MW</span>

              <span style={isClick.power === '200MW' ? {width:"66px",height:"8px",position:"absolute",top:"35px",left:"60px",color:"#7BF762"}  : {width:"66px",height:"8px",position:"absolute",top:"35px",left:"60px",color:"#5A8F4F"}}>+500€</span>
            </div>
                  
           {/* Wrap Div */}

           <p style={{position:"absolute",width:"141px",height:"24px",top:"481px",left:"50px",font:"Roboto Mono",fontWeight:"400px",color:"#7BF762",fontSize:"18px",width:"100%"}}>Wrap drive:</p>

            <div className={isClick.warp === "NO" ? "warp-1-clicked" : "warp-1-notClicked"} onClick={()=>{ handleWarp("NO")}}>

              <span style={isClick.warp === 'NO' ? {width:"66px",height:"8px",position:"absolute",top:"10px",left:"60px",color:"#7BF762"}  : {width:"66px",height:"8px",position:"absolute",top:"10px",left:"60px",color:"#5A8F4F"}}>NO</span>

              <span style={isClick.warp === 'NO' ? {width:"66px",height:"8px",position:"absolute",top:"35px",left:"60px",color:"#7BF762"} : {width:"66px",height:"8px",position:"absolute",top:"35px",left:"60px",color:"#5A8F4F"}}>+0€</span>
            </div>

            <div className={isClick.warp === "YES" ? "warp-2-clicked" : "warp-2-notClicked"} onClick={()=>{ handleWarp("YES")}}>

              <span style={isClick.warp === 'YES' ? {width:"66px",height:"8px",position:"absolute",top:"10px",left:"60px",color:"#7BF762"} : {width:"66px",height:"8px",position:"absolute",top:"10px",left:"60px",color:"#5A8F4F"}}>YES</span>

              <span style={isClick.warp === 'YES' ? {width:"66px",height:"8px",position:"absolute",top:"35px",left:"50px",color:"#7BF762"}  : {width:"66px",height:"8px",position:"absolute",top:"35px",left:"50px",color:"#5A8F4F"}}>+1000€</span>
            </div>

          {/* Option Package */}
           <p style={{position:"absolute",width:"141px",height:"24px",top:"615px",left:"50px",font:"Roboto Mono",fontWeight:"400px",color:"#7BF762",fontSize:"18px",width:"100%"}}>Select option package:</p>

            <div className={isClick.type === "basic" ? "package-1-clicked" : "package-1-notClicked"} onClick={()=>{handlePackage('basic')}}>

              <span style={isClick.type === 'basic' ? {width:"66px",height:"8px",position:"absolute",top:"10px",left:"60px",color:"#7BF762"}  :{width:"66px",height:"8px",position:"absolute",top:"10px",left:"60px",color:"#5A8F4F"}}>Basic</span>

            </div>

            <div className={ isClick.type === 'sport' ? "package-2-clicked" : "package-2-notClicked"} onClick={()=>{handlePackage("sport")}}>

              <span style={isClick.type === 'sport' 
              ? {width:"66px",height:"8px",position:"absolute",top:"10px",left:"60px",color:"#7BF762"}  
              : {width:"66px",height:"8px",position:"absolute",top:"10px",left:"60px",color:"#5A8F4F"}}>Sport</span>

              <span style={isClick.type === 'sport' ? {width:"66px",height:"8px",position:"absolute",top:"35px",left:"50px",color:"#7BF762"}  : {width:"66px",height:"8px",position:"absolute",top:"35px",left:"50px",color:"#5A8F4F"}}>+100€</span>
            </div>

            <div className={isClick.type === "lux" ? "package-3-clicked" : "package-3-notClicked"} onClick={()=>{handlePackage("lux")}}>

              <span style={isClick.type === 'lux' ? {width:"66px",height:"8px",position:"absolute",top:"10px",left:"60px",color:"#7BF762"}   : {width:"66px",height:"8px",position:"absolute",top:"10px",left:"60px",color:"#5A8F4F"}}>Lux</span>

              <span style={isClick.type === 'lux' ? {width:"66px",height:"8px",position:"absolute",top:"35px",left:"50px",color:"#7BF762"}  : {width:"66px",height:"8px",position:"absolute",top:"35px",left:"50px",color:"#5A8F4F"}}>+500€</span>
            </div>
        </div>
      </div>
  </>
}
export default App;