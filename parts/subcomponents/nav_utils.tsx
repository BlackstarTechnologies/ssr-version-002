"use client"
import {useState} from "react"


export const NavDropDown = (props) =>{

  const [dropDown, setDropDown] = useState(false)
  return (<div onClick={()=>setDropDown(!dropDown)}>
    {dropDown? "dropped Down" : <div>Sign Up</div> }
  </div> )
}