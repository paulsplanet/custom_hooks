import React from "react";
import UseClickApp from "./customHooks/useClick";
import UseInputApp from "./customHooks/useInput";
import UseTabsApp from "./customHooks/useTabs";
import UseTitleApp from "./customHooks/useTitle";





const App = () => {
  return (
    <div>
      <h1>Custom Hooks</h1>
      <UseInputApp />
      <UseTabsApp />
      <UseTitleApp />
      <UseClickApp />
    </div>
  )
}

export default App;