import RootRouter from "./rootRouter";
import getStore from "./store";
import { Provider } from "react-redux";

export const store = getStore();

export default function App() {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
}
