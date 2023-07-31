import "./App.css";
import "./assets/styles/style.css";
import { Provider } from "react-redux";

import { MainContainer } from "./sections/main-container";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
