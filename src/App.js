import React from "react";
import UseBeforeLeaveApp from "./customHooks/useBeforeLeave";
import UseClickApp from "./customHooks/useClick";
import UseConfirmApp from "./customHooks/useConfirm";
import UseFadeInApp from "./customHooks/useFadeIn";
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
      <UseBeforeLeaveApp />
      <UseFadeInApp />
    </div>
  )
}

export default App;