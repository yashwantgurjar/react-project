import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Registration=()=>{
    const [input, setInput] =useState({});
    const handleInput=(e)=>{
         let name=e.target.name;
         let value=e.target.value;
         setInput(values=>({...values, [name]:value}));
         console.log(input)
    }
    const handleSubmit=(e)=>{
       e.preventDefault();
       let api="http://localhost:3000/userdata";
       axios.post(api, input).then((res)=>{       
           toast.success("You are Succesfully registered!!!")
           setInput({
            name:"",
            userid:"",
            email:"",
            password:""
           })
       })
    }
    return(
        <>
          <h1> User Registration</h1>
      <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" value={input.name} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter userid</Form.Label>
        <Form.Control type="text" name="userid" value={input.userid} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name="email" value={input.email} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name="password" value={input.pwd} onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    <ToastContainer />
        </>
    )
}
export default Registration;