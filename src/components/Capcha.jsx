import React from 'react'
import { useState } from 'react'

const Capcha = () => {

    const[ca,setc]=useState([{cc:"qga64"},{cc:"ir5cm"},{cc:"9wgis"},{cc:"2w0qt"},{cc:"60lkj"}])
    const[cca,setcc]=useState(ca)
    const[rd,setr]=useState("")
    const[dd,setd]=useState({cap:""})
    const[mes,setm]=useState("")
     

    function ju(event)
    {
      event.preventDefault()
      let fg=cca[Math.floor(Math.random()*cca.length)].cc
      setr(fg)
    }
    function gv(event)
    {
      setd(prev=>{return{...prev,[event.target.name]:event.target.value}})
    }
    function ik(event)
    {
      event.preventDefault()
      let fv=(rd===dd.cap)?"ENTERED CAPCHA IS CORRECT":"ENTERED CAPCHA IS WRONG"
      setm(fv)
    }

  return (
    <div className='CA'>

      <h2>CAPCHA GENERATOR</h2>
      <br></br>
      <form onSubmit={ik}>
        <input
         type="text"
         id="c"
         value={rd}
         required
         className="in"/>

         <br></br>
         <br></br>

         <input
         type="text"
         id="d"
         placeholder="enter capcha"
         value={dd.cap}
         name="cap"
         required
         className="in"
         onChange={gv}
         />
         <br></br>
         <br></br>
          
         <button onClick={ju} className="MK">Generate</button>
         <button className="MK">SUBMIT</button>
         
         <br></br>
         <br></br>
         <p><strong>{mes}</strong></p>
      </form>

    </div>
  )
}

export default Capcha