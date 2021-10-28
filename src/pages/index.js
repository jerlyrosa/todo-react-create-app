import React  from "react";
import { AppUI } from "./AppUI";
import { AppProvider } from "../TodoContext";



function App() {
  
  return (
   <AppProvider>
      <AppUI />
   </AppProvider>
  );
}

export default App;
