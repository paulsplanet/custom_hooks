import React from "react";
import UseInputApp from "./customHooks/useInput";
import UseTabsApp from "./customHooks/useTabs";





const App = () => {
  return (
    <div>
      <h1>Custom Hooks</h1>
      <UseInputApp />
      <UseTabsApp />
    </div>
  )
}

export default App;