import React, { useEffect } from "react";
import AppRouter from "./router/AppRouter";
import { userObserver } from "./auth/firebase";

const App = () => {
  useEffect(()=>{
    userObserver();
  },[])
  return (
    <div>
      <AppRouter/>
      
    </div>
  );
};

export default App;