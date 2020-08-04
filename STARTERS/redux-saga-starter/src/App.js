import React from "react";
import Shop from "./shop/Shop";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Shop />
      </div>
    </Provider>
  );
}

export default App;
