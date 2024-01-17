import { useState } from "react"

function Button({btnColor,clickHandlerProp,content,textColor="white"})
{
  
    return(
      <button style={{backgroundColor : btnColor,
      color : textColor,
      width : "5rem",
      padding : "0.5rem",
      border : "3px solid black",
      borderRadius : "10px",}} onClick={()=>
      {
        clickHandlerProp(btnColor);
      }}>
      {content}
      </button>
    )
}


function Palette({clickHandlerProp})
{
  // const changeColor= () =>
  // {
  //    console.log("red");
  // }
  return(
    <div className="flex gap-x-3.5 self-end mb-8">
      <Button  btnColor="red" content="red" clickHandlerProp={clickHandlerProp}/>
      <Button  btnColor="green" content="green" clickHandlerProp={clickHandlerProp}/>
      <Button  btnColor="blue" content="blue" clickHandlerProp={clickHandlerProp}/>
      <Button  btnColor="yellow" content="yellow" textColor="black" clickHandlerProp={clickHandlerProp}/>
      <Button  btnColor="pink" content="pink" textColor="black" clickHandlerProp={clickHandlerProp}/>
      <Button  btnColor="purple" content="purple" clickHandlerProp={clickHandlerProp}/>
      <Button  btnColor="lavender" content="lavender" textColor="black" clickHandlerProp={clickHandlerProp}/>
      <Button  btnColor="white" content="white" textColor="black" clickHandlerProp={clickHandlerProp}/>
      <Button  btnColor="black" content="black" clickHandlerProp={clickHandlerProp}/>
      <Button  btnColor="orange" content="orange" clickHandlerProp={clickHandlerProp} />
      <Button  btnColor="cyan" content="cyan" clickHandlerProp={clickHandlerProp}/>
     </div>
  )
}

function App() {
  const [screenColor,setScreenColor] = useState("white");
  function changeColor(color)
  {
    setScreenColor(color);
  }
  return(
    <div className="h-screen flex justify-center" style={{backgroundColor : screenColor}}>
    <Palette clickHandlerProp={changeColor}/>
    </div>
  )
  
}

export default App
