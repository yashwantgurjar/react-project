import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { qntyInc, qntyDec, dataDel } from "../addtocartSlice";
import { useNavigate } from "react-router-dom";

const MyCart=()=>{
    const Data= useSelector((state)=>state.addCart.cart);
   console.log(Data);
   const navigate= useNavigate();
  const dispatch= useDispatch();
   const incQnty=(id)=>{
    dispatch(qntyInc({id:id}))
   }

   const decQnty=(id)=>{
    dispatch(qntyDec({id:id}))
   }
 
   const dataDelete=(id)=>{
     dispatch(dataDel({id:id}));
   }


  let sno=0;
  let grandTotal=0;
    const ans= Data.map((key)=>{
        sno++;
        grandTotal+=key.price*key.qnty;
          return(
            <>
              <tr>
                <td> {sno} </td>
                <td> <img src={key.image} wudth="100" height="100" /> </td>
                <td>{key.name} </td>
                <td>{key.brand} </td>
                <td>{key.category} </td>
                <td style={{fontSize:"12px", width:"300px"}}>{key.description} </td>
                <td>{key.price} </td>
                <th>
                <FaMinusCircle onClick={()=>{decQnty(key.id)}}  style={{cursor:"pointer"}}/> 
                 <span style={{marginLeft:"5px", marginRight:"5px"}}> 
                    {key.qnty}   
                 </span>    
                <FaPlusCircle onClick={()=>{incQnty(key.id)}}  style={{cursor:"pointer"}}/>
                 </th>
                <th> 
                    {key.price*key.qnty}
                    </th>
                <td>
                 <Button var="secondary" onClick={()=>{dataDelete(key.id)}} > Delete</Button>    
                 </td>
              </tr>
            </>
          )
    })


    const chekout=()=>{
      navigate("/checkout")
    }

    return(
        <>
          <h1> My Cart</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th> </th>
          <th>Product Name</th>
          <th>Brand</th>
          <th> Category </th>
          <th> Description</th>
          <th> Price</th>
          <th> Quantity</th>
          <th> Total </th>
          <td> </td>
        </tr>
      </thead>
      <tbody>
         {ans}

         <tr>
          <th>#</th>
          <th> </th>
          <th></th>
          <th></th>
          <th>  </th>
          <th> </th>
          <th></th>
          <th width="200" style={{color:"green", fontSize:"20px"}}> Grand Total:  </th>
          <th style={{color:"green", fontSize:"20px"}}> {grandTotal} </th>
          <td> </td>
        </tr>
      </tbody>
        </Table>

        <center>
           <Button onClick={chekout}> Checkout</Button>
        </center>  
        </>
    )
}

export default MyCart;