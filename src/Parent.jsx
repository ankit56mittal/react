// import React, {useState} from 'react'
// import Child from './Child'

// const Parent = () => {
//   const [userInput, setUserInput] = useState('')

//   function handleChange(e){
//     setUserInput(e.target.value)
//   }

//   function resetInput() {
//     setUserInput("RESET")
//   }

//   return (
//     <>
//       <div>
//         <input type="text" onChange={handleChange} value={userInput}/>
//       </div>
//       <Child resetInput={resetInput}/>
//       <div>{userInput}</div>
//     </>
//   )
// }

// export default Parent
// import React from "react";
// import { Image } from "react-bootstrap";

// function GoogleLogo() {
//   return (
//     <Image
//       src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
//       alt="Google Logo"
//       className="img-fluid"
//       style={{ width: "100%" }}
//     />
//   );
// }

// export default GoogleLogo;