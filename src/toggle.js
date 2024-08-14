import React from "react";
import { useState } from "react";

function Toggle({colorMode,setColorMode}){
console.log(colorMode)
    function ToggleClick(){
       setColorMode(true)


    }
    return(
        <>
        <label class="switch-button" for="switch">
  <div class="switch-outer">
    <input id="switch" type="checkbox"/>
    <div class="button">
      <span class="button-toggle" onClick={()=>{ToggleClick()}} ></span>
      <span class="button-indicator"></span>
    </div>
  </div>
</label>
        </>
    )
}
export default Toggle