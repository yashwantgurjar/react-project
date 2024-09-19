import { useNavigate } from "react-router-dom";
const user=window.localStorage.getItem("user")
const DashBoard=()=>{
  const navigate= useNavigate();
const userLogout=()=>{
    window.localStorage.clear();
   navigate("/login")
}
    return(
        <>
          <h1> Welcome : {user}   </h1>

          <button onClick={userLogout}>Logout</button>
        </>
    )
}
export default DashBoard;