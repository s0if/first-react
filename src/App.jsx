import { useState } from "react";




function App() {
  let[count,setCount]=useState(0);
  const changeCount=()=>setCount(++count)
return(
<button onClick={changeCount}>Saifaldin Komi {count}</button>
);
}

export default App
