import { Provider } from "react-redux";
import store from "store/Store";
import Container from "./Container";
import "./app.css";

const App = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};

export default App;
