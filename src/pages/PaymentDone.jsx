import spin from "../images/spinnergif.gif"
import { useState } from "react";

const PaymentDone=()=>{
    const [isLoading, setIsLoading] =useState(true);
    setTimeout(()=>{
         setIsLoading(false);
    }, 2000);

    return(
        <>
        <center>

            {isLoading? (
               <img src={spin} style={{width:"130px", height:"130px"}} />
            ) :(
                <h4 align="center" style={{color:"green"}}>
             Your order succesfully Placed  we will deliver your<br/> product
          within 5 to 6 working Day's</h4>
            )}
        
          
          </center>
        </>
    )
}

export default PaymentDone;