import { Provider } from "react-redux";
import "./App.css";
import ListSongs from "./components/ListSongs";
import Navbar from "./components/Navbar";
import { store } from "./redux/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/* span 1 */}
          {/* <DetailSong /> */}
          {/* span 2 */}
          <ListSongs />
        </div>
        {/* <Playing /> */}
      </Provider>
    </div>
  );
}

export default App;
