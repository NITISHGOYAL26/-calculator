import Button from "./Button"
import Answer from "./Answer"
import "./buttonWrapper.css"
import { useState } from "react";



export default function Calc()
{
   var [ans,setAns]=useState("");

const handelClick=(event)=>
{
   var value=event.target.value;
   if(value=="=")
   {
      if(ans!=="0")
      { 
          try
          {
         
            setAns(eval(ans));
          }
          catch(err)
          {
            setAns("ERROR");
          }
      }
   }
   else if(value=="C")
   {
      setAns("");
   }
   else if(value=="D")
   {
      try{
         setAns(ans.substring(0, ans.length-1));
      }
      catch(err)
      {
         setAns(ans);
      }
   }
   else{
      setAns(ans+=value);
   }
}
    return(
     <div className="frame">
         <Answer value={ans}/>
         <Button val="C" handelClick={handelClick} cl="button" cl1="Op"/>
         <Button val="D" handelClick={handelClick} cl="button" cl1="Op"/>
         <Button val="**" handelClick={handelClick} cl="button" cl1="Op"/>
         <Button val="/" handelClick={handelClick} cl="button" cl1="Op"/>
         <Button val="7" handelClick={handelClick} cl="button" cl1="btn"/>
         <Button val="8" handelClick={handelClick} cl="button" cl1="btn"/>
         <Button val="9" handelClick={handelClick} cl="button" cl1="btn"/>
         <Button val="*" handelClick={handelClick} cl="button" cl1="Op"/>
         <Button val="4" handelClick={handelClick} cl="button" cl1="btn"/>
          <Button val="5" handelClick={handelClick} cl="button" cl1="btn"/>
          <Button val="6"handelClick={handelClick} cl="button" cl1="btn"/>
          <Button val="-"handelClick={handelClick} cl="button" cl1="Op"/>
          <Button val="1" handelClick={handelClick} cl="button" cl1="btn"/>
          <Button val="2"handelClick={handelClick} cl="button" cl1="btn"/>
         <Button val="3"handelClick={handelClick} cl="button" cl1="btn"/>
            <Button val="+"handelClick={handelClick} cl="button" cl1="Op"/>
            <Button val="0"handelClick={handelClick} cl="Zero" cl1="Zer"/>
            <Button val="." handelClick={handelClick} cl="button" cl1="Op"/>               
            <Button val="=" handelClick={handelClick} cl="button" cl1="Op"/>
           
     </div>   
    )
}