import React from "react";
import UseClickApp from "./customHooks/useClick";
import UseConfirmApp from "./customHooks/useConfirm";
import UseInputApp from "./customHooks/useInput";
import UsePreventLeaveApp from "./customHooks/usePreventLeave";
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
      <UseConfirmApp />
      <UsePreventLeaveApp />
    </div>
  )
}

export default App;