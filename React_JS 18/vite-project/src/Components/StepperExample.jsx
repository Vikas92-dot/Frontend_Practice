import { useState } from "react";
import UserDetails from "./UserDetails";
import Payment from "./Payment";


function StepperExample() {
  const [activeStep, setActiveStep] = useState(0);
  const [allData, setAllData] = useState({ userDetails: {}, payment: {}, confirmation: {} });

  function getSectionComponent() {
    switch (activeStep) { 
      case 0: return <UserDetails steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} allData={allData} setAllData={setAllData} />;
      case 1: return <Payment steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} allData={allData} setAllData={setAllData} />;
      case 2: return <Confirmation />;
      default: return null;
    }
  }
  function Confirmation() {
    console.log(allData);
    return <> 
      <h2>Hello,{allData.userDetails.name} </h2>
      <h3>Your Payment of Rs.{allData.payment.amount} is Received through {allData.payment.mode}</h3>
      <h3>Booking confirmation.</h3>
    </>
  }
  return <>
    <div>
      <div style={{position:"absolute",top:"5%",left:"19%",background:"black",height:"1px",width:"28%"}}>
      </div>
      <div style={{position:"absolute",top:"5%",left:"54%",background:"black",height:"1px",width:"26%"}}>
      </div>
      
      <div style={{display:"flex",gap:"2rem",justifyContent:"space-around"}}>
        <div>
        <div style={{height:"50px",width:"50px",border:"1px solid black",borderRadius:"50px",alignItems:"center",justifyContent:"center",display:"flex",background: "green",color:"white"}}>
          1
        </div>User Details
        </div>


        <div>
        <div style={{height:"50px",width:"50px",border:"1px solid black",borderRadius:"50px",alignItems:"center",justifyContent:"center",display:"flex",background:activeStep > 0 ? "green" :"",color:activeStep > 0 ? "white" : ""}}>
          2
        </div>Payment
        </div>

          <div>

        <div style={{height:"50px",width:"50px",border:"1px solid black",borderRadius:"50px",alignItems:"center",justifyContent:"center",display:"flex",background:activeStep > 1 ? "green" :"",color:activeStep > 1 ? "white" :""}}> 3
        </div>Booking
          </div>
      </div>
      <div style={{marginTop:"5rem"}}>
        {getSectionComponent()}
      </div>
    </div>
  </>
}
export default StepperExample;