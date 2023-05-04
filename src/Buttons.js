import React from 'react'

function Buttons({display}) {
    // let btn=document.getElementsByTagName("button");
    // for(let i=0;i<btn.length;i++){
    //     btn[i].addEventListener("click",(e)=>{setInput(e.target.innerHTML)});
    // }
  return (
    <div>
        <div className='row'>
            <button onClick={(e)=>{display(e.target.innerHTML)}}>C</button>
            <button onClick={(e)=>{display(e.target.innerHTML)}}>D</button>
            <button onClick={(e)=>{display(e.target.innerHTML)}}>%</button>
            <button onClick={(e)=>{display(e.target.innerHTML)}}>*</button>
        </div>
        <div className='row'>
            <button onClick={(e)=>{display(e.target.innerHTML)}}>7</button>
            <button onClick={(e)=>{display(e.target.innerHTML)}}>8</button>
            <button onClick={(e)=>{display(e.target.innerHTML)}}>9</button>
            <button onClick={(e)=>{display(e.target.innerHTML)}}>+</button>
        </div>
        <div className='row'>
            <button onClick={(e)=>{display(e.target.innerHTML)}}>4</button>
            <button onClick={(e)=>{display(e.target.innerHTML)}}>5</button>
            <button onClick={(e)=>{display(e.target.innerHTML)}}>6</button>
            <button onClick={(e)=>{display(e.target.innerHTML)}}>-</button>
        </div>
        <div className='row'>
            <button onClick={(e)=>{display(e.target.innerHTML)}}>1</button>
            <button onClick={(e)=>{display(e.target.innerHTML)}}>2</button>
            <button onClick={(e)=>{display(e.target.innerHTML)}}>3</button>
            <button onClick={(e)=>{display(e.target.innerHTML)}}>+</button>
        </div>
        <div className='row'>
            <button onClick={(e)=>{display(e.target.innerHTML)}}>0</button>
            <button onClick={(e)=>{display(e.target.innerHTML)}}>00</button>
            <button onClick={(e)=>{display(e.target.innerHTML)}}>.</button>
            <button onClick={(e)=>{display(e.target.innerHTML)}}>=</button>
        </div>
    </div>
  )
}

export default Buttons