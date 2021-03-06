import React from "react";
import UseAxiosApp from "./customHooks/useAxiosApp";
import UseBeforeLeaveApp from "./customHooks/useBeforeLeave";
import UseClickApp from "./customHooks/useClick";
import UseConfirmApp from "./customHooks/useConfirm";
import UseFadeInApp from "./customHooks/useFadeIn";
import UseFullscreenApp from "./customHooks/useFullscreen";
import UseInputApp from "./customHooks/useInput";
import UseNetworkApp from "./customHooks/useNetwork";
import UseNotificationApp from "./customHooks/useNotification";
import UsePreventLeaveApp from "./customHooks/usePreventLeave";
import UseScrollApp from "./customHooks/useScroll";
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
      <UseNetworkApp />
      <UseScrollApp />
      <UseFullscreenApp />
      <UseNotificationApp />
      <UseAxiosApp />
    </div>
  )
}

export default App;