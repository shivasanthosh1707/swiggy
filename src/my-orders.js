import React from "react";
import Loader from "./loader";
import { useSelector } from "react-redux";
function MyOrders(){
 const orderedItems = useSelector((state)=>{
        return state.orderedItems
    })


    return (<><div className="orders-wrapper" >
    {orderedItems[0]  ?<> <div className="order-placed-header">
        
        <h2>Thank You!! Your order is placed  </h2>
        <p> just 15 mins away</p>
        
        </div> <div className="ordered-items-card">
<div className="bill-in">
    {orderedItems[0]?.map((item,i)=>{
        return <div ><div style={{ width :"85%",border :"0px solid gray",margin:"2px",display : "flex"}}>
            <img  src={item.Image} style={{width: "60px",height:"60px" ,marginRight:"20px"}}/>
          <div style={{ width:"100%",display:"flex",justifyContent:"space-between"}}>
            <div >
              <b>{item?.Name}</b>
              <p>{item?.Category}</p>
            </div>
            <div>
              <b style={{ marginTop:"0px" ,display:"flex"}}><i className="bi bi-currency-rupee"></i>{item?.Price} <br/> </b>
            </div>
            </div>
          </div>
          <hr/></div>
    })}

</div>
<img  style={{width:"20%"}} src="https://th.bing.com/th/id/OIP.CEMoji9R0QPMFXkonZ9IIwAAAA?rs=1&pid=ImgDetMain"/>
<img  style={{width:"50%" ,marginLeft:"290px", marginBottom:'-15px'}} src="https://th.bing.com/th/id/R.e273d9c6132db0e6a84b6849cff9e38e?rik=sjzPd6hBlwzChA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fhouse-png-house-png-2880.png&ehk=FlkJwr8rhSYf18N3CU9Cvp75o2ag3Kfjdio4tUqi94A%3d&risl=&pid=ImgRaw&r=0"/>
<hr/>
</div> </>:  <div className="Myorders-div">
<img style={{width:"30%"}} src="https://www.thrindle.com/static/media/emptyCart.4e943399.png"/>
{/* <p>You haven't placed any order yet.</p> */}
    </div>
    }

   




   </div>
   
   
   
   
   
   
   
    
    
    </>)
}
export default MyOrders