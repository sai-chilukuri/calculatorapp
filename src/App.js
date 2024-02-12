import React, {useState,useEffect} from "react";
import './App.css'

export default function Calculator(){
  const [value,updateValue]=useState("")
 function clickHandle(){
    var btn=document.getElementsByClassName('button')
    var dis=document.querySelector('p')
    for(var i of btn){
      i.addEventListener('click',(e)=>{
       switch(e.target.innerText){
        case '=':
          if(dis.innerText){
            try{
              dis.innerText=eval(dis.innerText)
          break;
            }
            catch{
              dis.innerText='Error...'
              setTimeout(()=>{
                dis.innerText='';
              },2000)
            }
           
          }
          else{
            dis.innerText='';
            break;
          }
        case 'del':
          if(dis.innerText){
            dis.innerText=dis.innerText.slice(0,-1)
            break;
          }
          else{
            dis.innerText='';
            break;
          }
          case 'C':
            dis.innerText='';
            break;
        default:
          updateValue(
            dis.innerText+e.target.innerText
          )
       }
      })
    }
  }
  return(
    <>
    <h1>Welcome to Calculator App</h1>
    <div className="cal_container" >
      <p>{value}</p>
    <div className="buttons">
      <button type="button" className="button">1</button>
      <button type="button" className="button">2</button>
      <button type="button" className="button">3</button>
      <button type="button" className="button">+</button>
      <button type="button" className="button">4</button>
      <button type="button" className="button">5</button>
      <button type="button" className="button">6</button>
      <button type="button" className="button">-</button>
      <button type="button" className="button">7</button>
      <button type="button" className="button">8</button>
      <button type="button" className="button">9</button>
      <button type="button" className="button">*</button>
      <button type="button" className="button">del</button>
      <button type="button" className="button">0</button>
      <button type="button" className="button">C</button>
      <button type="button" className="button">=</button>
      <button type="button" className="button">/</button>
      <button type="button" className="button">%</button>
      <button type="button" className="button">(</button>
      <button type="button" className="button">)</button>
    </div>
    <button id="load_Calculator" type="button"  className="btn btn-lg btn-outline-primary" onClick={clickHandle}>Load Calculator</button>
    </div>
    

    </>
  )
}