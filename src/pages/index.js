import React,{useState,useEffect} from "react"

let  IndexPage = () => {
  const [state, setstate] = useState("");
useEffect(() => {
  (async ()=>{
          let api =await fetch(".netlify/functions/hello_world")
             let data=   await api.json();
             console.log("Data", data)
             setstate(data.message);

  }

  )()
}, [])

return(

  <h1>Heelo World {state }</h1>
);

}

export default IndexPage
