import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/rubik/400.css";
import "@fontsource/titillium-web/400.css";
import "@fontsource/titillium-web/600.css";
import store from "./redux/store";
import { App } from "./components";
import "./styles/reset.css";
import "./styles/colors.css";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
