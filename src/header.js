import React from "react";
import './App.css'
import { Link, NavLink } from "react-router-dom";
import Home from "./home";
import { useSelector } from "react-redux";
function Header(){

   const  cartItems= useSelector((state)=>{
    return state.cartItems
   })
   const  location= useSelector((state)=>{
    return state.location
   })
// console.log(location[0]?.Name)
    return(<>
    <div className="header"> 
        <NavLink to={"/"} > <img  className="swiggy-img" style={{width:"70px",marginRight:"100px"}} src="https://yt3.googleusercontent.com/tmW_rLKwo58vNe8JfbXV0BDNT9zdqIMV331FmNczcvsl5bLZEBIznufOzdu7K_9jkLukYjAH=s900-c-k-c0x00ffffff-no-rj"/> </NavLink>
        {location?<NavLink to={"/"}  className="header-tab"
        style={{marginLeft:"-50px",marginRight:"3px" ,fontSize:"14px",fontWeight:"700", color:"black" ,borderBottom : "2px solid black"}}
        ><span>{location[0]?.Name?.slice(0,20)}</span></NavLink>:""}
        <NavLink to={"/"}  className="header-tab"  ><span><i className="bi bi-house"></i>Home</span></NavLink>
        <NavLink className="header-tab" to={"/SearchDishes"} ><span><i className="bi bi-search"></i>Search</span></NavLink>
        <NavLink className="header-tab" to={"MyOrders"} ><span><i className="bi bi-person"></i>My Orders</span></NavLink>
        <NavLink className="header-tab" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" ><span><i className="bi bi-box-arrow-in-left"></i>Sign In</span></NavLink>
        <NavLink className="header-tab" to={"/Cart"} ><span><i className="bi bi-cart3"></i>Cart {cartItems.length}</span></NavLink>
      
   </div>

<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqpHDFHQXYclFyO5rYKUOYQmPT8OrWucjftg&s" style={{width:"40%"}}/>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div className="offcanvas-sign-in"  style={{display:'flex',flexDirection:"column"}}>
        <b>LOG IN</b>
        <p>or  <span style={{color:"#fc8019"}}>create an account</span></p>
        <input  style={{width: "100%",color:"black",border:"1px solid gray",padding:"15px",marginTop:"40px",marginBottom:"30px"}} placeholder=" ENTER YOUR PHONE NUMBER"/>
        <button style={{width: "100%",color:"white", backgroundColor:"#fc8019" ,padding:"15px" ,textAlign:'center',border:"none",fontWeight:"700",letterSpacing:'5px'}}
         data-bs-dismiss="offcanvas" aria-label="Close">LOGIN</button>

    </div>
  </div>
</div>
    </>
    )
}
export default Header