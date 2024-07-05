import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
  const [user,setUser]=useState(null);
return (
  
  <>
  //basically you have to create a Context Provider Here
  //which will be wrapping the diffrenet react components and giving all access of the data present in the above user state to each and every rect component present inside the context provider!  
  <UserContext.Provider value={{user,setUser}}>
  {children}
  </UserContext.Provider>
  
  </>
)
}

export default UserContextProvider