import React, { useContext, useEffect } from "react";
import AppRouter from "./router/AppRouter";
import { userObserver } from "./auth/firebase";
import AuthContextProvider from "./context/AuthContextProvider";


const App = () => {
  useEffect(()=>{
    userObserver()
  },[])
  return (
    <div>
      <AuthContextProvider>
          <AppRouter/>  
      </AuthContextProvider>
    </div>
  );
};

export default App;