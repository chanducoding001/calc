import React,{useState} from "react";
import Buttons from "./Buttons";
import './App.css';
let deleted=false;
function App() {
  let [inputVal,setInput]=useState("");
  function display(invalue){
    
    if(invalue!=="C"&&invalue!=="D"&&invalue!=="="){
      if((inputVal[inputVal.length-1]==="+"||inputVal[inputVal.length-1]==="-"||inputVal[inputVal.length-1]==="*"||inputVal[inputVal.length-1]==="/"||inputVal[inputVal.length-1]==="."||inputVal[inputVal.length-1]==="%")
      &&(invalue==="+"||invalue==="-"||invalue==="*"||invalue==="/"||invalue==="."||invalue==="%")){
        
          //setInput(inputVal.slice(0,-1));
        setInput(inputVal)
      }else{
      setInput(inputVal+invalue);
      }
    }
    if(invalue==="="){
      deleted=true;
      if(inputVal[inputVal.length-1]==="+"||inputVal[inputVal.length-1]==="-"||inputVal[inputVal.length-1]==="*"||inputVal[inputVal.length-1]==="/"||inputVal[inputVal.length-1]==="."||inputVal[inputVal.length-1]==="%"){
        setInput(inputVal.slice(0,-1));
      }else{
        setInput(eval(inputVal))
      }
     // setInput(eval(inputVal));
      console.log(inputVal);
      console.log(inputVal.length);
    }
    if(invalue==="C"){
      setInput("");
    }
    if(deleted===true){
      if(invalue==="D"){
        setInput("")
      }
    }
    if(deleted===false&&invalue==="D"){
        setInput(inputVal.slice(0, -1))
    }
  }

  return (
    <div className="App">
      <input  defaultValue={inputVal}/>
      <Buttons display={display}/>
      
    </div>
  );
}

export default App;
